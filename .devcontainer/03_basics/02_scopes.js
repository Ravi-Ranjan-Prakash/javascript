var c=500;
const a=600;
if(true){
    const a=20;
    let b=30;
    var c=33
    console.log("inner:",a);  //it is in block scope it will print 20
}

//console.log(a);  //a and b will give an erroe that not defined but in case of c it will be accesible thats why 
//console.log(b);
console.log(c)     //var is generally avoided beacause we cannot declare any othe vaiable of same name in another scope
                   //even if the value of c in global scope is 300 it will print 33 thsts the problem

    console.log(a)  //now after declaring value of a in global scope we can access it and it will print 600


    function one(){
        const username="ravi";
        function two(){
            const website="youtube"
            console.log(username+website)
        }
      //  console.log(website)    //will give an error as it cannot be accessed outside
        two();
    }
    one();   //tye to comment this then the inner function ie two will also be not executed 


    if(true){
        const a=200;
        if(a==200)
        {
            console.log(2);
        }
    }


 //   +++++++++++++++++++++++++++++++++++++++++++++interestingfactforfunction++++++++++++++++++++++++++++++++++++++++++++++

     console.log(onei(5))     //it will be executed

     function onei(num){     //one way to declare function ,you van access this function before declaring it
         return num+1;
     }


     // console.log(twow(5))    //it will throw an error as this is declared using a variable but the above funtion is not
                                 //throw   Cannot access 'twow' before initialization
     const twow=function(num){     //another way to declare function
        return num+2
     }

     console.log(twow(5));