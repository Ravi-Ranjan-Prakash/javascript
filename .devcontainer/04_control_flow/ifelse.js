//if

const isUserLoggedin=true;

if(isUserLoggedin){
    console.log("welcome to website");
}

//if else

if(isUserLoggedin){
    console.log("welcome");
}
else{
    console.log("not welcome")
}

//if else if else
const val=500;

if(val<100){
    console.log("less than 100")
}
else if(val<=300)
{
    console.log("less than 300")
}
else{
    console.log("greater than 500");
    
}

//operators
// >,<,>=,<=,==,===,!=,!==

if(2===2 && 3<=5)
{
    console.log("both cases are true")
}

if(2===2 || 3>=5)
{
    console.log("any of the case is true")
}