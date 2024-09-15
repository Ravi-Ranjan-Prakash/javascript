// note-in browser the global object is windows object but in node,deno,bun the global object is empty
//to check this do [ console.log(this) ] in inspect in browser as wll as in vs code node engine

const user={
    username:"Ravi",
    age:22,

    welcomemessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)   //as it is in a object user it will print the user object
    }
}

user.welcomemessage();
user.username="Ranjan",
user.welcomemessage();

console.log(this)  //as it is an global object it will give empty object



const myfun=function(){
    console.log(this)   //it will provide the all methods
}
myfun();


const myfun1=() =>{         //arrow function
    console.log(this)    //this will give an empty object as in global object 
}

myfun1()
//### Thts why it is said that this function is not used in arrowfunction as it will not provide any methods of (this)

//lets learn about implicit and explicit arrow function

const myfun3=(num1,num2) => { 

    return num1+num2;                    //explicit function as we have to type return keyword
}

console.log(myfun3(3,5));


const myfun4=(num1,num2) => num1+num2      //implicit return as we donot have to type return keyword

const myfun5=(num1,num2) => (num1+num2)   //implicit function 

console.log(myfun5(3,6));

//generally in implicit function we dont use curly brackets we use parenthesis we dont have to return the function it will
//automatically return but in ecplicit function we have to use curly brackets and have to type return keyword 

//we can also pass object in implicit as well as explicit function

const myfun6=() => ({username:"ravi"});

console.log(myfun6());      //as implicit function is used it will automatically return 


const myfun7=() =>{      //object in explicit function
    const user ={
        username:"ravi"
    }
    return user;
}

console.log(myfun7());
