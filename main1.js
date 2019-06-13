console.log("Hello Suman");
const a=10;
const b=20;
c=a*b;
console.log("addition :" +c);
var users={name:"Suman Ansii",age:22,email:"kumarisuman0005@gmail.com",mobile:7870708655}
//console.log(users.email);
console.log(users);

        //annonymous function
var person=function(){
console.log("Hello Guys");
}
person();
var person=function(a,b){
    c=a+b;
    console.log("addition :" +c);
}
person(10,20);

        //arrow functio
var name = "Suman Ansii";
var users=()=> console.log("arrow function"); //not used curly braces when prin single line message.
users();

var users=(x,y)=> {      //used curly braces when multiple line prints.
z=x*y;
console.log("multiplication :" +z);
}
users(2,3);

module.exports.abc=name;
 
//console.log(__dirname);
//console.log(__filename);

            //ecmaScript
var r = 70;   //using var,no error occurance
var r = 40;
console.log(r);

//let s = 60;
//let s = 50;  //error occur coz of doble let
//console.log(s);

let t = 200;
function zxc(){
    let t = 100;
console.log(t);
}
zxc();
console.log(t);

const g = {    //contant object
    firstName : "Suman" ,lastName : "Ansii" 
}
g.mobile = 7759051464 , g.add = "Bokaro";
console.log(g);

var name = "JANVI"; //templating string
var age = 20;
console.log(`hlw ${name} you are ${age} years old`);



const http = require("http");
const server = http.createServer(function(req,res){
    res.write("<h1>my First HTTPmodule</h1>");
    res.end();
}).listen(3000,()=>console.log("running on port 3000"));  