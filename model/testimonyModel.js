import mongoose from "mongoose";


const TestimonySchema = new mongoose.Schema({
    person:String,
    country:String,
    avatar:String,
    avatarPublicId:String,
    trLink:String,
    biography:String,
    testimony:String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref: 'User',
    },

},{timestamps:true})

export default mongoose.model('Testimony',TestimonySchema)