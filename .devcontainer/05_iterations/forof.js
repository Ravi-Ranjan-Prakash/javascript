//for of

// ["","",""]
//[{}, {}, {}]

const arr=[1,2,3,4,5];

for (const element of arr) {
    console.log(element);
}

const greetings="Hello world"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

//maps
//maps are generally inbuilt objects and have unique objects
const mapi = new Map();

mapi.set('IN','india');
mapi.set('usa','United States of america')
mapi.set('fr','France');
mapi.set('IN','india');

console.log(mapi);

//lets try forof loop on map

for (const [key,value] of mapi) {      //interesting syntax
    console.log(key ,":-" ,value);
}


//lets try forof loop on objects

const myobject={
    game1:"nfs",
    game2:"pubg",
    game3:"cod"

}

//for (const [key,value] of myobject) {
   // console.log(key ,":-" ,value);       //it will give an error my objects is not iterable hence object cannot be iterated
                                           //using forof loop 
                                           //generally forin loop can be used for this
//}