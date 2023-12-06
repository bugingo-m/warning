import Question from '../model/questionModel.js'
import { StatusCodes } from 'http-status-codes'

export const getAllQuestions = async(req,res)=>{
    //pagination
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 5
    const skip = (page - 1) * limit
    const questions = await Question.find({}).limit(limit).skip(skip)
    const allQuestions = await Question.find({})
    const totalQuestions = await Question.countDocuments({})
    const numOfPages = Math.ceil(totalQuestions/limit)
    res.status(StatusCodes.OK).json({questions,totalQuestions,
    currentPage:page,numOfPages,allQuestions})
}
export const getQuestion = async(req,res)=>{
    const {id} = req.params
    const question = await Question.findById(id)
    res.status(StatusCodes.OK).json({question})
}
export const createQuestion = async(req,res)=>{
    const {userId} = req.user
    req.body.createdBy = userId
    const question = await Question.create(req.body)
    res.status(StatusCodes.CREATED).json({question})
}
export const updateQuestion = async(req,res)=>{
    const {id} = req.params
    const updatedQuestion = await Question.findByIdAndUpdate(id,req.body,{new:true})
    res.status(StatusCodes.OK).json({updatedQuestion})
}
export const deleteQuestion = async(req,res)=>{
    const {id} = req.params 
    const deletedQuestion = await Question.findByIdAndDelete(id)
    res.status(StatusCodes.OK).json({msg:'question deleted successfully'})
}
