let prompt = require('prompt-sync')();
// for practical for me  
// let student = {
//     name: "faizan",
//     age: 20,
//     address:
//         "sarfara nagr parbhani",

//     marks: [75, 85, 90, 88]

// };


// console.log("Name : " + student.name);
// console.log("Age : " + student.age);

// let enter;
// do {

//     let ask = prompt('enter entity which you want see: ');

//     if (ask == "name") {
//         console.log("Name : " + student.name);
//     }
//     else if (ask == "age") {
//         console.log("Age : " + student.age);
//     }
//     else if (ask == "address") {
//         console.log("Address : " + student.address);
//     }
//     else if (ask == "marks") {
//         console.log("Marks : " + student.marks);
//     }
//     else {
//         console.log("Invalid Entity");
//     }

//     enter = prompt('do you want to continue? y/n : ');

// } while (enter === "y")

//convert any object to json
// let objecttojson = {
//     name: "faizan",
//     age: 20,
//     address: 'sarfaraz nagar parbhani'

// };
// console.log(typeof jsontoobject);
// const json = JSON.stringify(objecttojson);
// console.log(json);
// console.log(typeof json)

//convert json to object

let jsontoobject = '{ "name": "faizan", "age": 20, "address": "sarfaraz nagar parbhani" }';

console.log(typeof jsontoobject);
console.log(jsontoobject);
const obj = JSON.parse(jsontoobject);

console.log(obj);

console.log(typeof obj)
