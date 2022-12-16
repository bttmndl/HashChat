const express = require("express");
const { chats } = require("./data/data")

const app = express();
app.get('/', (req, res)=>{
    res.send("Api is runing")
})

app.get("/api/chat", (req, res)=>{
    res.send(chats);
})

app.get("/api/chat/:id" , (req, res)=>{
    // console.log(req.params.id);
    const singleChat = chats.find((c)=> c._id===req.params.id);
    res.send(singleChat)
})


app.listen(5000, console.log("Server started at port 5000"));