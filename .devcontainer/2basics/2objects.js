const myobject = new Object()  //singleton object

const myobject1={}              //non-singleton objects

myobject1.id="123";
myobject1.name="Ravi";
myobject1.isloggedin=false

console.log(myobject1)

//you can also declare object in a object

const newuser={
    name:{
        firstname:"ravi",
        lastname:"ranjan"
    },

}

console.log(newuser.name.lastname);

//merge two objects

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

const obj3={obj1,obj2};
console.log(obj3)  //it will have same problem as in array as will print object in a object but it will not print single array

  //same as arrya there is a spread method (mainly used)
  const obj4={...obj1,...obj2}
  console.log(obj4);

  //.assign method
  const obj5=Object.assign({},obj1,obj2);
  console.log(obj5);

  // we may get some database like this in form of array

  const user=[
    {
       name:"hbd",
       email:"habh@hbd"
    },
    {
     
    },
    {

    }
  ]
  //to access this data
  user[1].email;

  //if we want to print all the keys,values of an object i will give the result in array form
console.log(Object.keys(myobject1));
console.log(Object.values(myobject1))
console.log(Object.entries(myobject1))   //it will print key value pair in array form

//to check if the object have the key value pair or not
    console.log(myobject1.hasOwnProperty('isloggedin'))
  
