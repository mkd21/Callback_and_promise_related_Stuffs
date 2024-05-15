function randomInteGenerator(num)
{
    return Math.floor(Math.random() * num);
}

function CreatePromiseWithTimeOut()
{
    return new Promise(function executor(resolve , reject){

        console.log("Entering the executor callback in promise constructor");

        setTimeout(function exec(){
            let val = randomInteGenerator(10);
            if(val % 2 == 0)
            {
                resolve(val);
            }
            else 
            {
                reject(val);
            }

        } , 3000);
        
        console.log("Exiting the executor callback in the promise constructor");
    });
}


console.log("Starting");
const p = CreatePromiseWithTimeOut();
console.log("Current state of promise",p);


// p.then(function fulfill(){} , function reject(){});     // signature of the function

p.then(
    function fullfillhandler(value){console.log("Inside fullfillhandler with value as",value); },
    function rejectionhandler(value){console.log("Inside rejectionhandler with value as",value); }
);
