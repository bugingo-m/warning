import { Router } from "express";
const router = Router()
import { validateRegister,validateLogin } from "../middleware/validator-middleware.js";
import {register,login,logout} from '../controllers/auth.js'
router.post('/register',validateRegister,register)
router.post('/login',validateLogin,login)
router.get('/logout',logout)

export default router