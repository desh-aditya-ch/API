const express=require("express");

const app=express();

const port=5500;

app.use(express.json());

const posts = [
    { id: 101, title: "System Design 101" },
    { id: 102, title: "Node.js Tips" }
];


const comments = [
    { id: 1, postId: 101, text: "Great post!" },
    { id: 2, postId: 101, text: "Very helpful, thanks." },
    { id: 3, postId: 102, text: "I love Express!" }
];


app.get("/post/:postId/comments",(req,res)=>{
    const postId=parseInt(req.params.postId);

    const postComments=comments.filter(c=>c.postId===postId);

    res.json(postComments)
});

app.get("/comments",(req,res)=>{
    const {postId}=req.query;


    if(postId){
        const postIdNum=parseInt(postId)
        const filteredComments=comments.filter(c=> c.postId===postIdNum);
        return res.json(filteredComments);
    }
})

app.listen(
    port,
    ()=>{console.log("server running at http://localhost:5500");
    }
);