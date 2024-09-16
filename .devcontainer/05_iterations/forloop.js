//
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

//nested loop

for (let i = 0; i <10; i++) {
    console.log(i);
    for(let j=0;j<10;j++)
    {
        console.log(i+j);
    }
    
}

//loop in array

const arr=["superman","batman","wonderwomen"];

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}


//break and continue

for(let i=0;i<10;i++)
{
    if(i==5)
    {
        console.log("5 detected")
        break;                         //break out of loop
    }
    console.log(`number is ${i}`);
}

//continue
for(let i=0;i<10;i++)
{
    if(i==5)
    {
        console.log("5 detected")           //skipped particular iteration
        continue;
    }
    console.log(`number is ${i}`);
}