//types of datatypes

//#primitive(can be called by value)

     //string,number,bigint,symbol,boolean,null,undefined

     const ravi=1000 
     console.log(typeof(ravi))   //will print  number datatype
     let r="Ravi" 
     console.log(typeof(r))      //will print string datatype
     const m=null
     console.log(typeof(m))       //will print objectdatatype
     let k=undefined    
     console.log(typeof(k))       //will print undefined datatype

     const s=Symbol('123');
     const p=Symbol('123');
     console.log(typeof(s))
     console.log(s===p)   //will print false as symbole of even same number are different


  //#referece(non-primitive datatype)
  
    //arrays,object,function

    //arrays declaration
    const heros=["ravi","h","l"];

    //function dclaration
    const myfunction=function(){
        console.log(1);
    }
  //object declaration
    const obj={
        name:ravi,
        class:10
    }