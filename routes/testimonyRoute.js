import { Router } from "express";
import { adminOnlyMiddleware } from "../middleware/admin-middleware.js";
const router = Router()

import {
    createTestimony,
    getTestimonies,
    getTestimony,
    updateTestimony,
    deleteTestimony
} from '../controllers/testimony.js'
import upload from '../middleware/multerMiddleware.js'
import { validateTestimony,validateTestimonyParams } from "../middleware/validator-middleware.js";

router.route('/').get(getTestimonies).post(adminOnlyMiddleware('admin')
,upload.single('avatar'),validateTestimony,createTestimony)
router.route('/:id').get(validateTestimonyParams,getTestimony).
patch(adminOnlyMiddleware('admin'),upload.single('avatar'),validateTestimony,validateTestimonyParams,updateTestimony).
delete(adminOnlyMiddleware('admin'),validateTestimonyParams,deleteTestimony)


export default router