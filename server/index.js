// Server
const path = require('path')
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get("/api", (req,res) =>{
    res.json({message: "Hello from server"});
});

app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

app.listen(PORT, ()=> {
    console.log (`server listening on ${PORT}`);
});



