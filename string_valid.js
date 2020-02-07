 
const express = require('express');
const server = express();
server.use(express.urlencoded());
var path = require("path")
const port = 4001;

server.get("/api", (req, res) => {
    res.sendFile(path.join(__dirname + '/string_valid.html'));
});

server.post("/api", (req, res) => {
    var count = 0
    var user = req.body.user
    let leng = user.length;
    for (var i = 0; i < leng; i++){
        var letter = user[i]
        if(user.indexOf (letter)){
        }
        count = count + 1
    }
    if (count % 2 == 0){
        res.send("valid h")
    }
    else{
        res.send("not valid")
    }
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
})