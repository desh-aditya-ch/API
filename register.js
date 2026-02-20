const express=require("express");

const app=express();

const PORT=3000;

app.use(express.json());


const validateJsonHeader=(req,res,next)=>{
    const contentType= req.headers['content-type'];

    if(contentType!=='application/json'){
        return res.status(400).json({
            error:"content-type is Incorrect"
        })
    }
    next(); 
}



app.post("/register",validateJsonHeader,(req,res)=>{
    const {username,password}=req.body;

    if(!username || !password){
        return res.status(400).json({
            error:"username and password is required"
        })
    }

    console.log(`user is registered by username : ${username}`);

    res.status(200).json({
        message:"user registered successfully",
        username: username
    })
})


app.listen(
    PORT,
    ()=>{console.log(`Server running at http://localhost:${PORT}`);
    }

)