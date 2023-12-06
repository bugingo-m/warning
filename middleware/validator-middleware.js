import { NotFoundError,BadRequestError,unAuthorizedError } from "../errors/errors.js";
import Question from '../model/questionModel.js'
import User from '../model/authModel.js'
import Testimony from "../model/testimonyModel.js";
import { body,param,validationResult } from "express-validator";
import mongoose from "mongoose";
const withValidationErrors = (validateResults)=>{

    return[
        validateResults,
        (req,res,next)=>{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                const errorMessages = errors.array().map((error)=>{
                    return error.msg
                })
                //no question
                if(errorMessages[0].startsWith('No question')){
                    throw new NotFoundError(errorMessages)
                }
                //no testimony
                if(errorMessages[0].startsWith('No testimony')){
                    throw new NotFoundError(errorMessages)
                }
                //unauthorized
                if(errorMessages[0].startsWith('not authorized')){
                    throw new unAuthorizedError(errorMessages)
                }
                throw new BadRequestError(errorMessages)
            }
            
            next()
        }
    ]
}

export const validateQuestion = withValidationErrors([
    body('question').notEmpty().withMessage('Please provide your question')
])
export const validateParams = withValidationErrors([
    param('id').custom( async(value,{req})=>{
        const isValidId = mongoose.Types.ObjectId.isValid(value)
        if(!isValidId){
            throw new BadRequestError('Not a valid id')
        }
        // //check testimony
        // const testimony = await Testimony.findById(value)
       
        // if(!testimony){
        //     throw new NotFoundError(`No testimony with id ${value} found`)
        // }
        //check question
        const question = await Question.findById(value)
        if(!question){
            throw new NotFoundError(`No question with id ${value} found`)
        }
        //check owner
        
        const isOwner = question.createdBy.toString() === req.user.userId;
        const isAdmin = req.user.role === 'admin'
        if(!isOwner && !isAdmin){
            throw new unAuthorizedError('not authorized to access this route')
        }
    })
    
])

export const validateRegister = withValidationErrors([
    body('firstName').notEmpty().withMessage('please provide name').isLength({min:3})
    .withMessage('name must be atleast 3 characters long').trim(),
    body('email').notEmpty().withMessage('please provide email').isEmail()
    .withMessage('please provide a valid email ').
    custom(async(email)=>{
        const alreadyExists = await User.findOne({email})
        if(alreadyExists){
            throw new BadRequestError('email already exists')
        }
    }).trim(),
    body('password').notEmpty().withMessage('please provide password')
    .isLength({min:6}).withMessage('password must be atleast 6 characters'),
    body('lastName').notEmpty().withMessage('please provide name').isLength({min:3})
    .withMessage('name must be atleast 3 characters long').trim()
])


export const validateLogin = withValidationErrors([
    body('email').notEmpty().withMessage('please provide email').isEmail()
    .withMessage('please provide a valid email '),
    body('password').notEmpty().withMessage('please provide password')

]) 

export const validateUpdate = withValidationErrors([
    body('firstName').notEmpty().withMessage('please provide name').isLength({min:3})
    .withMessage('name must be atleast 3 characters long').trim(),
    body('email').notEmpty().withMessage('please provide email').isEmail()
    .withMessage('please provide a valid email ').
    custom(async(email,{req})=>{
        const user = await User.findOne({email})
        if(user && user._id.toString() !== req.user.userId){
            throw new BadRequestError('email already exists')
        }
    }).trim(),
    
    body('lastName').notEmpty().withMessage('please provide name').isLength({min:3})
    .withMessage('name must be atleast 3 characters long').trim()
]) 

export const validateAnswer = withValidationErrors([
    body('answer').notEmpty().withMessage('please provide answer')
])

export const validateTestimony =withValidationErrors([
    body('person').notEmpty().withMessage('please provide name of the person'),
    body('country').notEmpty().withMessage('please provide country of origin'),
    body('biography').notEmpty().withMessage('please provide biography'),
    body('testimony').notEmpty().withMessage('please provide testimony details'),



])
export const validateTestimonyParams =withValidationErrors([
    param('id').custom( async(value,{req})=>{
        const isValidId = mongoose.Types.ObjectId.isValid(value)
        if(!isValidId){
            throw new BadRequestError('Not a valid id')
        }
        //check testimony
        const testimony = await Testimony.findById(value)
       
        if(!testimony){
            throw new NotFoundError(`No testimony with id ${value} found`)
        }
       
        // //check owner
        
        // const isOwner = testimony.createdBy.toString() === req.user.userId;
        // const isAdmin = req.user.role === 'admin'
        // if(!isOwner && !isAdmin){
        //     throw new unAuthorizedError('not authorized to access this route')
        // }
    })
])