var readline = require('readline-sync');
var name = readline.question(" enter your string :)");
function isInnvalid(name){
    var array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","x","y","z"]
    for (var i = 0; i < name.length; i++){
        for (var j = 0; j < array.length; j++){
            if (name[i] == array[j]){
                var sto = ("valid h")
            }
            else{
                return ("invalid h")
            }
        }
    return (sto)
    }
}
console.log(isInnvalid(name))



// var readline = require('readline-sync');
// var user = readline.question(" enter your string :)");
// var user_input =user.split(",")
// let string_data = " "
// for (var i = 0; i < user_input.length; i++){
//     for(var j = 0; j < user_input.length; j++){
//         if (user_input[i] > user_input[j]){
//             string_data = string_data + 1
//             console.log("invalid h")
//             break
//         }
//         else{
//             console.log("valid h")
//             break
//         }
//     }
// }
