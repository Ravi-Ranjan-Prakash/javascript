
const num=109;
console.log(num)   //by default it will give output as number

//if you want an explicitely number should be defined then same as string you have to use new keyword to declare an object of 
//number type

const num1=new Number(100);
console.log(num1)   //it will be surely number and will be an object of numbertype have keyvalue pairs

//as it is an object you can access the values such as

console.log(num1.toString());  //to convert in string

console.log(num1.toFixed(2))  //it will give  decimal value upto .00

const num3=10000000;

console.log(num3.toLocaleString())    //will convert the number according to us standard  1,000,000


//+++++++++++++++++++++++++++++++++++++++++++  MATH   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Math is itself a object having keyvalue pairs

console.log(Math);

console.log(Math.abs(-1));     // output-1
console.log(Math.round(4.6));  //
console.log(Math.ceil(4.2));   //
console.log(Math.floor(4.9));  //
console.log(Math.random());    //  will give any random value b/w 0 and 1

//if you want any value b/w 1 to 10

console.log(Math.floor(Math.random()*10)+1);


//if you want any random value b/w  
const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1)+min))   //it will generate any random value b/w 10 to 20;
