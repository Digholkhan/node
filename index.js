const express = require("express")
const getMiddleware = require("./getMiddleware")
const app = express()

app.use(express.json())

const Port = 3000

// app.get("/",(req,res)=>{
//     res.send("hello")
// })

app.get("/",getMiddleware,(req,res)=>{
    res.send({
        userName: "kashem",
        email: "kadklhfaskhf"
    })
})

app.post("/registation",(req,res)=>{
    let {userName,email, password} = req.body

    let errors = []

    if(!userName){
        errors.push({
            type: "userName",
            message:"userName is required"
        })
    }

    if(!email){
        errors.push({
            type: "email",
            message:"email is required"
        })
    }

    if(!password){
         errors.push({
            type: "password",
            message:"password is required"
        })
    }


    res.send({
        success: errors.length === 0 ? true : false,
        message:  errors.length === 0 ?"registation successfull" : "registation failled",
        errors :  errors.length === 0 ? null : errors
    })
})

app.listen(Port,()=>{
    console.log(`youre server running on \n localhost:${Port}`)
})