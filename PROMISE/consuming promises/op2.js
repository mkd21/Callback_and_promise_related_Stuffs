function blockingForLoop()
{
    for(let i = 0; i < 10000000000; i++){}
}

console.log("Start of the file");

setTimeout(function funk(){
    console.log("Timer 1 done");
} , 0);

blockingForLoop();

let x = Promise.resolve("Mayank's promise 1");

x.then(function processFunction(value){
    console.log("Whose promise?", value);
    blockingForLoop();
});

let y = Promise.resolve("Mayank's promise 2");

y.then(function processPromise(value){
    console.log("whose promise?",value);
    setTimeout(function () {
        console.log("ok done");
    } , 0);
});

let z = Promise.resolve("Mayank's promise 3");

z.then(
    function processPromise(value)
    {
        console.log("whose promise?", value);
    }
);

setTimeout(function timer2(){
    console.log("Timer2 done");
} , 0);

console.log("End of the file");