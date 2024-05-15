console.log("Hi");

setTimeout(function funk(){
    console.log("Async code executed");
} , 0);

for(let i = 1 ; i< 1000000000; i++)
{
    //some work
}

console.log("Bye");