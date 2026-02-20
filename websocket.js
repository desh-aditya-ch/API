const express=require("express");
const http=require("http");
const {Server}=require("socket.io");

const app=express();

const server=http.createServer(app);

const io=new Server(server);

app.use(express.json());

let comments=[];

app.post("/comments",(req,res)=>{
    const newComment={
        id:comments.length+1,
        text:req.body.text
    };
    // comments.push(newComment);

    io.emit('newComment',newComment);

    res.status(201).json(newComment);
});


const PORT=5500;

app.listen(PORT,()=>{
    console.log(`Server running at: http://localhost:${PORT}`);
    
})


