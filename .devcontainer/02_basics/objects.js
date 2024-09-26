//sigleton are the those objects which are not declared using object literals

//object literals
//way to declare symabol
const mysy = Symbol("key1");
const jsUser={
    name:"Ravi"  ,//key such that name is always scored in form of string in js
    [mysy]:"ranjan" ,  
    age:22,
    email:"ravi@gmail.com"
}


//types to access the the objects keys
console.log(jsUser.name);
console.log(jsUser["name"]);
//print symbol
console.log(jsUser[mysy]);

//update the value
jsUser.email="raviranjan@gmail.com"
console.log(jsUser.email);

//want to freeze the value such that no further values can be changed

//Object.freeze(jsUser);

//lets try to change email and then print

jsUser.email="ravi@chatgpt.com";

console.log(jsUser.email);

//to create function

jsUser.greetings=function(){
    console.log("hi");
}
console.log(jsUser.greetings());

jsUser.greetings2 = function(){
    console.log(`hi my name is , ${this.name}`);   //backtics method
}

console.log(jsUser.greetings2());