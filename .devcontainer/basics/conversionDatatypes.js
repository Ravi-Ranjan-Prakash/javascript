let score=33

console.log(typeof(score));  //will give number

let score1="33";
console.log(score1);  //will give string

//conversion to number
let value=Number(score1);

console.log(typeof value);  //will print number

// string which we want to convert is
// 1 -33   //will print number
// 2-33abc //will convert to a number but when printed it will give NaN(not a number)
// 3-null  //will convert and will pprint 0
// 4-undefined //will be converted but will print undefined

let str="33abc";

let newstr=Number(str)  // to convert str into a number
console.log(typeof newstr)  //will print number
console.log(newstr)   //will print NaN

//convert to boolean

let string=""
let isboolean=Boolean(string)
console.log(typeof isboolean)  //will print boolean
console.log(isboolean) //will print false as empty string 

let stri="ravi";
let bool=Boolean(stri);
console.log(typeof stri)  //will print boolean
console.log(stri)  //wil print true;



//to convert to string

let k=22;
let ki=String(k);
console.log(typeof ki)  //will print string