//function is just a way to make a copy of things whiich we can use further

const myfun=function(){
    console.log("r"),
    console.log("a")
    console.log("v")
    console.log("i")
}

myfun  //this is just the way for function reference

myfun()  //this is way to execute the function

//  syntax  function(contains parameter here)

const addnumber=function(num1,num2){
    console.log(num1+num2);
}

addnumber();    //this will give NaN as we have given the parameters but not arguments

addnumber(3,4);      //in this you passed the argument

const res=addnumber(5,6);
console.log("resutl:",res);   //this will give undefined error we cannot store a console log function in a variable 

//if your function have return value then you can store that

const addnumber2=function(num1,num2){
    return num1+num2;
}

const result=addnumber2(9,10);
console.log(result);


//lets learn something more
const username1=function(username){
    if(!username)
    {
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(username1("ravi"));
console.log(username1())        //it will give undefined as we dont passed any argument thats why we used a if condition

//you can also pass argument along with parameter if no argument will be provided further the it will read that 

const username2=function(username="ranjan"){
    return `${username} is very good person`
}

console.log(username2("ravi"))   //it will overwrite the argument provided earlier

console.log(username2())  //this time it will print ranjan as earlier provided


//when you will try to make a project you will not have know number of parameters then here we use spread method

const calculateCartPrice=function(...num1)
{
    return num1;
}

console.log(calculateCartPrice(200,300,400));   //it will return the whole array

const calculateCartPrice1=function(val1,val2,...num1)
{
    return num1;
}

console.log(calculateCartPrice1(100,200,300,400,500));  //it will assing 1,2 value to val1 and val2 and all other will be assingent to num 1


//if you want to pass object in a function

const user={
  name:"ravi",
  price:300
}

const handleObject=function(myobj){
    console.log(`name id ${myobj.name} and price is ${myobj.price}`)

}

handleObject(user);

//you can also directly pass the object
handleObject({
    name:"ranjan",
    price:600
})


//you can also pass an array 

let arr=[200,300,400,500]

const handleArray=function (myarray){
    console.log(myarray[1]);
}

handleArray(arr);

//you could also directly pass array
handleArray([
    800,900,1000,1100
])