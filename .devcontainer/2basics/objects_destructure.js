//destructuring of objects

const user={
    name:"ravi",
    email:"ravi@gmail",
    age:22
}
//first way to call the value
console.log(user.name);

//supose you have to call user.name so many times then objects destructuring helps

const {name}=user;
console.log(name);

//if you find the name is large then you can also also rename it

const {email:e}=user
console.log(e);

//you can see the examle of destructuring in functions

/*ex-const navbar=(props.company)=>{       you can use {company}  insted of using props.company
      console.log("hi")
    }
      navbar(company="ravi")


    */


/* //you get the data from api in ths form
 
 {
    "name":"ravi",
    "email":"djsddd"   //here we have to use string for key as it is not an object because in string by default they take key 
                     //string    
 }   */




 //generally you get the data from api in form of arrays and are in jason format
 //json-javascript object notation
 //all the api are jason format
 //we have to send object always in jason format
 
 [
    {},
    {},
    {}
 ]