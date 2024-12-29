// console.log("starting....");
// let fs = require("fs");
// let os = require("os");
let notes=require("./notes.js");
let _ = require('lodash')
console.log(notes);

let user=os.userInfo();
console.log(user.homedir," \nfaizan");

fs.appendFile("info.txt",'welcome faizan..! \n',()=>{console.log ("....\tfile created successfully ..!")})

let age=notes.age;
console.log(age);

let result=notes.addnumber(age,6);
console.log(result);

let final=notes.message
console.log(final);




let arr=new Array('welcome',1,2,2,4,3,3,4,'faizan','ahmed','hi ',5,1,1,2);

let array=['welcome',1,2,2,4,3,3,4,'faizan','rahman','hi ',5,1,1,2]
console.log(array);

let remove_duplicate=_.uniq(arr) //.uniq is used to remove duplicate form the array
console.log(remove_duplicate);

console.log(_.isBoolean(false));


