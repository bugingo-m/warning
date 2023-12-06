import 'express-async-errors'

import morgan from 'morgan'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import path,{dirname} from 'path'
import { fileURLToPath } from 'url'
import * as dotenv from 'dotenv'
dotenv.config()

import cloudinary from 'cloudinary'
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET,
})
import express from 'express'
 

const app = express()
//question router
//dirmame construction
const __dirname = dirname(fileURLToPath(import.meta.url))
import questionRouter from './routes/questionRoute.js'
//auth router
import authRouter from './routes/authRoute.js'
//user router
import userRouter from './routes/userRoute.js'
//testimony router
import testimonyRouter from './routes/testimonyRoute.js'
//auth middleware
import { authMiddleware } from './middleware/auth-middleware.js'
//error middleware
import { errorHandlerMiddleware } from './middleware/error-middleware.js'
//cookie parser
app.use(cookieParser())
//for static assets
app.use(express.static(path.resolve(__dirname,'./public')))
//json parser
app.use(express.json())
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
//question routes
app.use('/api/v1/questions',authMiddleware,questionRouter)
app.use('/api/v1/testimony',authMiddleware,testimonyRouter)
//auth routes
app.use('/api/v1/auth',authRouter)
//user routes
app.use('/api/v1/user',authMiddleware,userRouter)
//testimony routes

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public','index.html'))
})
app.use('*',(req,res)=>{
    res.status(404).send('Resource not found')
})
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000;



try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(port,()=>{
    
        console.log(`Server listening on port ${port}....`);
    })
} catch (error) {
    console.log(error);
    process.exit(1)
    
}
