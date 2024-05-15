function createPromise()
{
    return new Promise(function exec(resolve , reject){
        console.log("resolving the promise");
        resolve("done");
    });
}

setTimeout(function process(){
    console.log("Time Completed");
} , 0);


let p = createPromise();

p.then(
    function fulfillHandler(value){
        console.log("fulfilled with the value", value);
    } ,
    function rejectionHandler(){}
);

console.log("ending");


// handler or functions inside promise objects are executed by "micro task" queue