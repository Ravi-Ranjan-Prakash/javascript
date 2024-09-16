//generally used to avoid so much use of if else

const month=4;

//syntax

/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

switch(month){
    case 1:{
        console.log("Jan");
        break;
    }
    case 2:{
        console.log("feb");
        break;
    }
    case 3:{
        console.log("march")
        break;
    }
    case 4:{
        console.log("April")
        break;
    }
    default :{
        console.log("cannot found")
        break;
    }
}