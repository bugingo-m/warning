import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    firstName:String,
    email:String,
    password:String,
    lastName:{
        type:String,
        default:'lastname'
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    avatar:String,
    avatarPublicId:String,

},{timestamps:true})

UserSchema.methods.removePassword = function(){
    const obj = this.toObject()
    delete obj.password
    return obj
}
export default mongoose.model('User',UserSchema)