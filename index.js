const express = require("express")
const getMiddleware = require("./getMiddleware")
var jwt = require("jsonwebtoken");

const app = express()

app.use(express.json())

const Port = 3000

// app.get("/",(req,res)=>{
//     res.send("hello")
// })

app.post("/login",(req,res)=>{
    let token = jwt.sign({ data: "acbdefgd" }, 'lkkkjh', { 
        expiresIn: '1m' 
    });
    // console.log(token)
    res.send(token)
})


app.get("/newsFeed",getMiddleware,(req,res)=>{
    res.send({
        message: "you have permission"
    })
})

// app.get("/user",getMiddleware,(req,res)=>{
//     let token = jwt.sign({ name: "kashem" }, 'a@j)kja*k', { 
//         expiresIn: '1h' 
//     });
//     console.log(token)
//     res.send("hello")
// })

// app.get("/test",(req,res)=>{
//     let decodedToken = jwt.verify(
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2FzaGVtIiwiaWF0IjoxNzkwNTc2MDk4LCJleHAiOjE3OTA1Nzk2OTh9.srs6cC-NWLx9FWvDryT_aBEPF3Xa_Te9dbBrXjJsLyc",
//       "a@j)kja*k",
//     );
//     console.log(decodedToken);
//     res.send("hello")
// })

// app.post("/registation",(req,res)=>{
//     let {userName,email, password} = req.body

//     let errors = []

//     if(!userName){
//         errors.push({
//             type: "userName",
//             message:"userName is required"
//         })
//     }

//     if(!email){
//         errors.push({
//             type: "email",
//             message:"email is required"
//         })
//     }

//     if(!password){
//          errors.push({
//             type: "password",
//             message:"password is required"
//         })
//     }


//     res.send({
//         success: errors.length === 0 ? true : false,
//         message:  errors.length === 0 ?"registation successfull" : "registation failled",
//         errors :  errors.length === 0 ? null : errors
//     })
// })

app.listen(Port,()=>{
    console.log(`youre server running on \n localhost:${Port}`)
})