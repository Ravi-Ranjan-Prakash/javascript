
const name="ravi";

console.log(name);


const name1="ravi";
const age=50;

console.log(name1+age+"value");  //this method is generally old we use new thing using backtick

console.log(`my name is ${name1} and my age is ${age}`);  //this isn new method


const name2=new String('RaviRanjan')     //it will give output as object ie as key :value pair
                                            //   0:r
                                            //    1:a
                                            //    2:v
                                            //    3:i

  console.log(name2.length)                                          
console.log(name2.charAt(4))

const newstring=name2.substring(0,4);    //for finding the substring
    console.log(newstring)
const new2string=name2.slice(-8,4);       //for finding the slice and all ie we can even write or print the number in reverse order
console.log(new2string)



//.trim

const name4="  raviranjan   "

console.log(name4);            //it will print as it is
console.log(name4.trim())       //it will print without spaces

//.replace(what to replace,with what)

console.log(name4.replace('ravi','kavi'));   // will give kaviranjan

//.includes(what you want to check)

const name5="ravi-ranjan-prakash"
console.log(name5.includes('ravi'))      //will print true

//.split(on basis of)

console.log(name5.split('-'));   //will split the number according to given parameter


