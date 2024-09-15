//immediately invoked function  expressions(IIFE)

//we generally need this when we generally want some data from database or many more things

(function chai(){
    console.log("Hello");
})() ;                    //generally we use parenthesis st the last of the function and enter whole function into parenthesis


( (name) =>{
    console.log(`"Hello", ${name}`)
})("ravi")               //you can also pass agruments in given function 


//when you use two function having iife then we have to use semicolon on first to seperate otherwise it will give error