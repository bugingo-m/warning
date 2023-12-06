import mongoose from "mongoose";


const QuestionSchema = new mongoose.Schema({
    question:String,
    answer:{
        type:String,
        default: 'No answer yet'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref: 'User'
    }
    
},{timestamps:true})

export default mongoose.model('Question',QuestionSchema)