 
const express = require('express');
const server = express();
server.use(express.json());
var path = require("path")
const port = 4001;
server.use(express.urlencoded({extended:false}));

// var readline = require('readline-sync');
// var name = readline.question(" enter your string :)");

server.get("/api", (req, res) => {
    res.sendFile(path.join(__dirname + '/string_valid.html'));
});
server.post("/api1", (req, res) => {
    // res.send("dfghjnkhj")
    function isValid(){
        res.send("yes")
    }
    isValid()
})
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
})