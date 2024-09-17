//filter just filters out the required values

const arr=[1,2,3,4,5,6,7,8,9,10];

console.log(arr.filter((num)=>num>5));

//const nums=arr.filter((num)=>{
  //  num<5;
//})
//console.log(nums); 

     //it will give an empty array unless we dont return as we have used curly brackets

     const nums=arr.filter((num)=>{
        return num<5;
     })

     console.log(nums)

     //another example (we generally get data from database like this)
     const books=[
        {name:"book1",genere:"fiction",publish:2008,republish:2014},
        {name:"book2",genere:"non-fiction",publish:2000,republish:2004},
        {name:"book3",genere:"history",publish:1997,republish:2000},
        {name:"book4",genere:"political",publish:2003,republish:2019},
        {name:"book5",genere:"history",publish:2001,republish:2015},
        {name:"book6",genere:"fiction",publish:2000,republish:1975},
     ]

  let userbook=books.filter((bk)=>bk.genere==="fiction");
  console.log(userbook);
   
  userbook=books.filter((bk)=>bk.publish>=2000);
  console.log(userbook);



//map function-it apply changes to whole values of array and it will itself return


const arr1=[1,2,3,4,5,6,7,8,9,10]

const mynum=arr1.map((item)=>item*10);
console.log(mynum);

    //you can use iterative no of methods for example

    const my=arr1.map((item)=>{return item*10}).map((item)=>item+1).filter((item)=>item>60)

    

    console.log(my);