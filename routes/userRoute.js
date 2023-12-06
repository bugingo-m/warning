import {Router} from 'express'
import { validateUpdate,validateParams,validateAnswer } from '../middleware/validator-middleware.js'
import { adminOnlyMiddleware } from '../middleware/admin-middleware.js'
import upload from '../middleware/multerMiddleware.js'
const router = Router()
import { 
    answerQuestion,
    getAllUsers,
    getCurrentUser,
    getMyQuestions,
    getParticipants,
    updateUser } from '../controllers/user.js'


router.patch('/update-user',upload.single('avatar'),validateUpdate,updateUser)
router.get('/current-user',getCurrentUser)
router.get('/my-questions',getMyQuestions)
router.get('/users',getAllUsers)
router.get('/users/participants',getParticipants)
router.patch('/answer/admin/:id',
[adminOnlyMiddleware('admin'),validateAnswer,validateParams],answerQuestion)

export default router