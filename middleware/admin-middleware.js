import { unAuthorizedError } from "../errors/errors.js"



export const adminOnlyMiddleware = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            throw new unAuthorizedError('Unauthorized to access this route')
        }
        next()
    }
}