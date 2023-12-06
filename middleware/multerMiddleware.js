import multer from "multer";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        //set destination
        cb(null,'public/uploads')
    },
    filename:(req,file,cb)=>{
        //set fileName
        const fileName = file.originalname
        cb(null,fileName)
    }
})

const upload = multer({storage})
export default upload