const getMiddleware = (req,res,next)=>{
    console.log(req.headers.authorization)
    if(req.headers.authorization === "12345"){
        next()
    }else{
        res.send({
            message: "you do not have permission"
        })
    }
    // next()
}

module.exports = getMiddleware