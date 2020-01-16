 
const express = require('express');
const server = express();
server.use(express.json());
var path = require("path")
const port = 4001;
server.use(express.urlencoded({extended:false}));

server.get("/api", (req, res) => {
    res.sendFile(path.join(__dirname + '/string_valid.html'));
});
server.post("/api", (req, res) => {
    var user = req.body.strings 
    var user_input =user.split(",")
    let str = " "
    for (var i = 0; i <user_input.length; i++){
        for(var j = 0; j<user_input.length; j++){
            if (user_input[i] > user_input[j]){
                str = str + 1
                res.send("valid h")
                break
            }
            else{
                res.send("invalid h")
                break
            }
        }
    }
})
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
})