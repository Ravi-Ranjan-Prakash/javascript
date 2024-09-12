//Date is an object in javascript javing various key value pairs or methods

let myDate=new Date();    //it will print any default date;
console.log(myDate);

//the various methods of date are

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

//to declare a specific date

let mynewDAte=new Date(2023,0,14);

console.log(mynewDAte.toDateString());

//another way to declare specific date

let mynew1Date=new Date("01-14-2023");

console.log(mynew1Date.toDateString());

//if you want to print the todays date;
let todaysDate= Date.now();
console.log(todaysDate);

//if you want to peint the timestamp also

console.log(mynew1Date.getTime());

//if you want to access only date ,day,year you cal also do that
console.log(mynew1Date.getDate());
console.log(mynew1Date.getDay());
console.log(mynew1Date.getMonth()+1)  //generally month starts from 0 index


//any property can also be modified

mynew1Date.toLocaleString('default',
    {
        weekday :"long",
    
    }
    
   
)

