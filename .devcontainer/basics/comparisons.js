//normal comparison 

console.log(2>3);





///comparison b/w  different datatypes

console.log("2"==2);         //true     //it will convert the string into number and then will compare
console.log("3">2);          //false            //    "

console.log(null>0);         //false            //it will convert null to a number ie zero and then will compare
console.log(null==0);        //false
console.log(null>=0);         //true

//comparing b/w different datatypes is always a bad practice it should be avoided even if javascript allows it
// typescript is thats why introduced as they have strict rule,you will not be able to compare b/w two datatypes
//these are the limitations of javascript as sometimes they take value of null as "NaN"  but sometimes zero
// "===" tripeequalto not only compares the value but they also check the datatypes

console.log("3"===3);  //false
