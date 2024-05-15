console.log("Hi");

for(let i = 0 ; i < 3; i++)
{

    setTimeout(function funk(){
        console.log("Async code executed");
    } , 10); //10ms

}
for(let i = 1 ; i< 1000000000; i++)
{
    //some work
}

console.log("Bye");