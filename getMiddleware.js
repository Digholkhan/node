const jwt = require("jsonwebtoken")

const getMiddleware = (req,res,next)=>{
   
    let token = req.headers.authorization
    // console.log(token)
    // console.log(token.split(" ")[1])

    // let decodedToken = jwt.verify(token.split(" ")[1], 'lkkkjh');
    // console.log(decodedToken)

    try{
      let decodedToken = jwt.verify(token.split(" ")[1], "lkkkjh");
    //   console.log(decodedToken);
      if(decodedToken){
          next()
      }
    }catch(err){
        // console.log("eror",err)
        // console.log(token)
        // console.log("token expired")
        let token = jwt.sign({ data: "acbdefgd" }, 'lkkkjh', { 
                expiresIn: '1m' 
        });
        return res.send(token)
    }
    
    // if(decodedToken){
    //     next()
    // }else{
    //     res.send( "you do not have permission")
    // }


    
}

// const getMiddleware = (req,res,next)=>{
//     console.log(req.headers.authorization)
//     if(req.headers.authorization === "12345"){
//         next()
//     }else{
//         res.send({
//             message: "you do not have permission"
//         })
//     }
//     // next()
    
// }

module.exports = getMiddleware