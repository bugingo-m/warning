import { verifyJWT } from "../utils/utilsToken.js";
import { unAuthenticatedError } from "../errors/errors.js";
export const authMiddleware = (req,res,next)=>{
    const {token} = req.cookies
    if(!token){
        throw new unAuthenticatedError('authentication invalid')
    }
    try {
        const {userId,role} = verifyJWT(token)
        req.user = {userId,role}
        next()
    } catch (error) {
        throw new unAuthenticatedError('authentication invalid')
    }
    
    
}