const express=require("express");

const app=express();

const port=5500;

app.use(express.json());

let comments=[];

app.post('/comments',(req,res)=>{
    const {username,comment_text}=req.body;

    const newComment={
        id:comments.length+1,
        username:username,
        comment_text:comment_text

    };

    comments.push(newComment);

    res.status(201).send(newComment);
})

app.get('/comments/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const comment=comments.find(c=> c.id===id);

    if(!comment){
        return res.status(400).json({"message":"coment not found"})
    }

    res.status(200).json(comment);
})

app.delete('/comments/:id',(req,res)=>{
    const id=parseInt(req.params.id);

    comments=comments.filter(c=>c.id !== id)

    res.status(204).send()
})




app.listen(
    port, 
    ()=>{console.log(`server running at http://localhost:${port}`);
    }
);