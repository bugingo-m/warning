import User from '../model/authModel.js'
import Question from '../model/questionModel.js'
import { StatusCodes } from 'http-status-codes'
import cloudinary from 'cloudinary'
import {promises as fs} from 'fs'
export const getAllUsers = async(req,res)=>{
    const users = await User.find({})
    const withoutPassword = users.map((user)=>{
        const {_id,firstName,email,lastName,avatar}=user
        return {_id,firstName,email,lastName,avatar}
    })
    //console.log(withoutPassword);
    res.status(StatusCodes.OK).json({users:withoutPassword})
}
export const getParticipants = async(req,res)=>{
    
     try {
       const questions = await Question.find({})
       const created = questions.map((question)=>question.createdBy)
       //const owners = new Set(created)
       //const unique = Array.from(owners)
        res.status(StatusCodes.OK).json(owners) 
     } catch (error) {
        console.log(error);
     }
     
    
        
    // const user = await User.findById(req.params.id)
    // const withoutPassword = user.removePassword()
    //res.status(StatusCodes.OK).json(uniqueOwners)
}

export const getCurrentUser = async(req,res)=>{
 const user = await User.findById({_id:req.user.userId})
 const userWithoutPassword = user.removePassword()
 res.status(StatusCodes.OK).json({user:userWithoutPassword})
}
export const getMyQuestions = async(req,res)=>{
    const questions = await Question.find({createdBy:req.user.userId})
    res.status(StatusCodes.OK).json({questions})
}
export const answerQuestion = async(req,res)=>{
    const{id} = req.params
    const answer = await Question.findByIdAndUpdate(id,req.body,{new:true})
    res.status(StatusCodes.OK).json({answer})
}
export const updateUser = async(req,res)=>{
    const newUser = {...req.body}
    delete newUser.password
    if(req.file){
        const response = await cloudinary.v2.uploader.upload(req.file.path)
        await fs.unlink(req.file.path)
        newUser.avatar = response.secure_url;
        newUser.avatarPublicId = response.public_id
    }
    const updatedUser = await User.findByIdAndUpdate
    ({_id:req.user.userId},newUser)
    if(req.file && updatedUser.avatarPublicId){
        await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId)
    }
    res.status(StatusCodes.OK).json({msg:'user updated'})
    
}
