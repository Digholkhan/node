const express = require("express")
const app = express()
const multer = require("multer")
// const upload = multer()
const Port = 8000

app.use(express.json())
app.use("/uploads", express.static("uploads"))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) =>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + "-" + file.originalname);
    }
})

const upload = multer({storage: storage})

app.post("/profilePicUpload", upload.single('profilePic'),(req,res)=>{
    // const {userName} = req.body
    console.log(req.file);
    res.send("hello world")
})



app.listen(Port,()=>{
    console.log(`youre server running on \n localhost:${Port}`)
})