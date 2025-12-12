a();
//b();

// Function statement or Function declaration
function a(){
    console.log('a called');
}

// Function Expression
var b = function(){
    console.log('b called');
}

// Anonymous Function
// function(){
//     // This results an error because anonymous functions must be assigned to a variable or used as an argument
// }

// Named Function Expression
var c = function xyz(){
    console.log(xyz); // This works
}

//xyz(); // This results an error because xyz is not defined in this scope

// First Class Functions
var d = function(param){
    return function(){
    }
}

console.log(d());