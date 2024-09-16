const coding=["java","c++","c","ruby","js","python"]


coding.forEach(function(item){
      console.log(item)
})


coding.forEach( (val)=>{
        console.log(val)
})


//you can also pass the function in for each loop ex

function print(item){
    console.log(item);
}

coding.forEach(print);



//we can also access index and whole array

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

//mainly for loop will be used we we want to access the data from database 
//genarally we get the dta in form of array having objects
//lets learn how to do that

const languages=[
    {
        name:"cplusplus",
        shortcut:"c++"
    },
    {
       name:"java",
       shortcut:"j"
    },
    {
       name:"javascript",
       shortcut:"js"
    }
]


languages.forEach( (item)=>{
      console.log(item.name);
})

