//different types to declare an array

const myArray = [0,1,2,3,4,5];
console.log(myArray[1])      //print an element at particilar index

const myArray1=["ravi","ranjan","prakash"];
console.log(myArray1);

const myArray2=new Array(1,2,3,4,5);

console.log(myArray2);


// arrays have property of shallow copy as in heap memory as if we change the value it will also get change in original array
//primitive datatypes have deep copy as after changin value the value will only be changed in copied one not in original one


myArray2.push(2);   //it will add values form behind
console.log(myArray2);
myArray2.pop()     //it will pop the last element


//to add the element form pront and to delete the element form front we can use unshift and shift 

myArray2.unshift(5);
console.log(myArray2);

myArray2.shift();  //will delete the element form front
myArray2.shift();

//if we want to check whether the element is present in array or not

console.log(myArray2.includes(3));   //will print a boolean result

//if you want to check the index of any element

console.log(myArray2.indexOf(9))  

//to bind the array and covert it into string

//join is used for this purpose

const newArray=myArray.join();

console.log(myArray2);
console.log(newArray);

//slice ans spice differences and working

const myArray3=new Array(1,2,4,5,6,7);

console.log("A",myArray3);

const newmyArray3= myArray3.slice(1,3)  //it takes the starting index and endind index but it doesnt include ending index means
                                  //it will return only 1 ans 2 indexed values
console.log(newmyArray3);

console.log("B",myArray3);                                

const new1myArray3=myArray3.splice(1,3)  //it will return all the three values ie indexed 1,2,3 
console.log(new1myArray3);     
console.log("c",myArray3);  


//the major difference b/w slice and splice is that slice doest affect original array it just take out the copy of elements
//but in case of splice it takes out the element from original aaray and it effects the original array



