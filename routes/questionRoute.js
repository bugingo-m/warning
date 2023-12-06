import { Router } from "express";

const router = Router()

import { 
    getAllQuestions,
    createQuestion,
    getQuestion,
    updateQuestion,
    deleteQuestion
 } from "../controllers/questions.js";
import { validateQuestion,validateParams } from "../middleware/validator-middleware.js";
 router.route('/').get(getAllQuestions).post(validateQuestion,createQuestion)
 router.route('/:id').get(validateParams,getQuestion)
 .patch(validateQuestion,validateParams,updateQuestion).
 delete(validateParams,deleteQuestion)

 export default router