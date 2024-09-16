const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    j:"java"
}

for (const key in myobj) {
    
        console.log(myobj)
    }


    for(const key in myobj){
        console.log(key);
    }

    for(const key in myobj){
        console.log(myobj[key]);
    }


    //lets use this lop in array

    const lang=["js","c++","java","ruby","rust"]

    for(const key in lang)
    {
        console.log(key)    //it will print the key ie index
    }

    for(const key in lang)
    {
        console.log(lang[key]);    //it will now print value
    }



    //map is not iteratable using forin loop