import User from '../model/authModel.js'
import { StatusCodes } from 'http-status-codes'
import { hashPassword,comparePassword } from '../utils/utilsPassword.js'
import { unAuthenticatedError } from '../errors/errors.js'
import { createJWT } from '../utils/utilsToken.js'
export const register = async(req,res)=>{
    const isFirst = (await User.countDocuments()) ===0
    req.body.role = isFirst?'admin':'user'
    const hashedPassword = await hashPassword(req.body.password)
    req.body.password = hashedPassword;
    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({user})
}
export const login = async(req,res)=>{
    const {password,email} = req.body
    //find by email
    const user = await User.findOne({email})
    if(!user){
        throw new unAuthenticatedError('invalid credentials')
    }
    //compare password
    const isPasswordCorrect = await comparePassword(password,user.password)
    if(!isPasswordCorrect){
        throw new unAuthenticatedError('invalid credentials')
    }
    const token = createJWT({userId:user._id,role:user.role})
    const oneDay = 1000 * 60 * 60 *24
    res.cookie('token',token,{
        httpOnly:true,
        expires:new Date(Date.now() + oneDay),
        secure:process.env.NODE_ENV === 'production'
    })

    res.status(StatusCodes.CREATED).json({msg:'user logged in'})
    
}

export const logout = async(req,res)=>{
    res.cookie('token','logout',{
        httpOnly:true,
        expires:new Date(Date.now()),
        secure:process.env.NODE_ENV === 'production'
    })
    res.status(StatusCodes.OK).json({msg:'logged out'})
}