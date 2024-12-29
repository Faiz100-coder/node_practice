let prompt = require('prompt-sync') ();
const readline = require('readline');
console.log("server started...");


// //Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

// function add(a,b) {
//     return a + b;
    
// }
// let result=add (2,3);
// console.log(result);


// const sub=(c,d)=> {
// return c - d;

// }
// let r=sub(5,3);
// console.log(r);
// //console.log(sub(5,3)); // this will throw an error because of the arrow function  below
// console.log(sub(5,3)); 

// const mul=(e,f)=>e*f;

// console.log(mul(2,3));

// const div=(x,y)=>x/y;
// console.log(div(9,3));


// let age=function(day,date) {
//     return day + date;
// }

// console.log(age(20,10));
// console.log(age(50,50));

// let you=(function(n){
//     console.log("my name is Faizan");
//     return n;
// })
// let f=you("aaa")
// console.log(f);


// let my=(function(){
//     console.log("my name is Naveen");

// })();


function callback(){
console.log("call back function is called.")

}
let add= function(a,b,callback){ 

    let esult= a+b;
    console.log("result: "+esult);
    callback();
}
add(20,30,callback);




function callback(){
    console.log("call back ....")

}

let sub=function(a,b,callback){
    let result=a-b;
    console.log(result)//main function called complete  
    callback();

}
sub(10,5,callback)
