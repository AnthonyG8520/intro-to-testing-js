// helloWorld function/Exercise 0
const helloWorld = function() {
    return "Hello, World!";
}

function double(num){
    return num * 2;
}

// function sayHello(input) {
//     if (input !== "") {
//         return "Hello, " + input + "!"
//     }else if (typeof(input) === "undefined"){
//         return "Hello, World!"
//     } else return "Hello"
// }

function sayHello(input){
    if (input === "undefined") {
        return "Hello, World!"
    }
}