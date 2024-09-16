const isLoggedin=true;

if(isLoggedin)
{
    console.log("yes logged in")
}

const h=""    //empty string is considered as false

if(h)
{
    console.log("jsd")
}
else
{
    console.log("false value")
}

//falsy values

 // 0 ,-0, "" ,Bigint 0n, false,null,undefined,NaN

 //truthy values
 //true,'false','0',"-0","0",[],{},function(){}

 const emailUser=[1];

 if(emailUser.length)
 {
    console.log("true")
 }


 //..nullish coleascing operator (??):null undefined

 let val1;

 val1=10??15;
 console.log(val1);

 val1=null??20;
 console.log(val1);

 val1=undefined??30;
 console.log(val1);

 val1=null??50??100;

 console.log(val1);


 //ternary operator 

 const score=100;

 score<90?console.log("lass than 90"):console.log("not less than 90")


