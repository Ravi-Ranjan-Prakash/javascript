//Different methods to learn

const marvel_heros=["ironman","thor","hulk"];

const dc_heros=["superman","antman","batman"];

marvel_heros.push(dc_heros);    //it will push all the element of dc into marver but as whole array

console.log(marvel_heros);
console.log(marvel_heros[3][2]);   //will return batman

//to avoid this concatinate have been introduced

const all_Heros=marvel_heros.concat(dc_heros);

console.log(all_Heros)  //will return a new array having all elemnet of both array 

//there is another method to do this which is spread method which is widely use you can push any nuber of array at same time

const all_new_heros=[...marvel_heros,...dc_heros];
console.log(all_new_heros);


const another_Array=[1,2,3,[1,5,3],2,9,[2,1,[5,6]]];
//if you want to concatinate the given array into single array or in 1-D form you can use a methoed called flat;
const real_another_Array=another_Array.flat(Infinity);

console.log(real_another_Array);

//to check if the given datstructure is array or not

console.log(Array.isArray("Hello"));

//if it is not array then convert it into array

console.log(Array.from("Hello"));

//console.log(Arrays.form(name:"Ravi"))  //interesting case study about this

//to combine element to form an array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));





