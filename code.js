// helloWorld function/Exercise 0
const helloWorld = function() {
    return "Hello, World!";
}

function double(num){
    return num * 2;
}
//Previous attempts
// function sayHello(input) {
//     if (input !== "") {
//         return "Hello, " + input + "!"
//     }else (typeof input === "undefined")
//         return "Hello, World!"
//
// }

// function sayHello(input){
//   if (typeof input === "undefined")
//     return "Hello, World!"
// }
//----------------

function sayHello(input){
    if (typeof input === "undefined" || typeof input === "boolean"){
        return "Hello, World!"
    }else return "Hello, " + input + "!"
}