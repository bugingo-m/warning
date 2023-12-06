import { StatusCodes } from "http-status-codes";
import Testimony from '../model/testimonyModel.js'
import cloudinary from 'cloudinary'
import {promises as fs} from 'fs'
export const createTestimony = async(req,res)=>{
    const {userId} = req.user
    req.body.createdBy = userId
    const newTestimony ={...req.body}
    if(req.file){
        const response = await cloudinary.v2.uploader.upload(req.file.path)
        await fs.unlink(req.file.path)
        newTestimony.avatar = response.secure_url;
        newTestimony.avatarPublicId = response.public_id
    }
    //if(req.file && updatedUser.avatarPublicId){
    //     await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId)
    // }
    const testimony = await Testimony.create(newTestimony)
    res.status(StatusCodes.CREATED).json({msg:'testimony added'})
} 
export const getTestimonies = async(req,res)=>{
    
    //setup pagination
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 4
    const skip = (page - 1) * limit
    const testimonies = await Testimony.find({}).skip(skip).limit(limit)
    const numOfTestimonies = await Testimony.countDocuments({})
    const numOfPages = Math.ceil(numOfTestimonies / limit)
    res.status(StatusCodes.OK).
    json({numOfTestimonies,testimonies, currentPage:page,numOfPages})
} 
export const getTestimony = async(req,res)=>{
    const testimony = await Testimony.findById(req.params.id)
    res.status(StatusCodes.OK).json({testimony})
} 
export const updateTestimony = async(req,res)=>{
    const {id} = req.params;
    const newTestimony = {...req.body};
    if(req.file){
        const response = await cloudinary.v2.uploader.upload(req.file.path)
        await fs.unlink(req.file.path)
        newTestimony.avatar = response.secure_url;
        newTestimony.avatarPublicId = response.public_id
    }
    
    const testimony = await Testimony.findByIdAndUpdate({_id:id},newTestimony)
    if(req.file && testimony.avatarPublicId){
        await cloudinary.v2.uploader.destroy(testimony.avatarPublicId)
    }
    res.status(StatusCodes.OK).json({msg:'update testimony'})
} 
export const deleteTestimony = async(req,res)=>{
    const {id} = req.params;
    const testimony = await Testimony.findByIdAndDelete(id)
    res.status(StatusCodes.OK).json({msg:'testimony deleted'})
} 