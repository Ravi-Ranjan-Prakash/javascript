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




    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    let myname="ravi";
    let anothername=myname;
    //myname=anothername;

    console.log(myname);

                                             //these are primitive datatypes thats why things happened in heap and changed in it copy not in origial
    anothername="parakash";
      
    console.log(myname);
    console.log(anothername)
     
    //all changes of a non-primitive datatypes happened in heap
    let userOne={
        name:ravi,
        id:"ravi@gmial.com"
    }

    let userTwo=userOne
    userTwo.id="fsgd@jd";   ///original value is changed in this;
    
       

    console.log(userOne.id);
    console.log(userTwo.id)
