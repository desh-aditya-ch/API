const express=require("express");

const app=express();

const port=5500;

app.use(express.json());

let comments = [
    { id: 1, text: "Initial comment", isPinned: false, lastUpdated: "2023-01-01" }
];



app.put("/comments/:id",(req,res)=>{
    const id=parseInt(req.params.id);

    const index=comments.findIndex(c=>c.id===id);

    if(index==-1) return res.status(404).send("comment not found");

    const {text,isPinned,lastUpdated}= req.body;

    comments[index]={
        id,
        text,
        isPinned,
        lastUpdated
    };
    res.json(comments[index]);
});

app.patch("/comments/:id",(req,res)=>{
    const id=parseInt(req.params.id);

    const comment=comments.find(c=>c.id===id);

    if(!comment) return res.status(404).send("Comment Not Found");

    Object.assign(comment,req.body);

    res.json(comment);
});





app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
});