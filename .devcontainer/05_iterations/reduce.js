const arr=[1,2,3,4,5,6]

const mytotal=arr.reduce((accumulator,currentvalue)=>{
    console.log(`the acc is ${accumulator} and currentval is ${currentvalue}`);
    return accumulator+currentvalue
},0)   //0 is the initial value assigned to accumulator

console.log(mytotal);


const total=arr.reduce((acc,curr)=>acc+curr,0);
console.log(total);



//how it is used in projects lets try

const shoppingCart=[
    {name:"shirt",price:1000},
    {name:"t-shirt",price:2000},
    {name:"pant",price:3000}
]

const carttotal=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(carttotal);
       