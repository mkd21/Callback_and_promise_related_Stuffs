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

        } , 5000);
        
        console.log("Exiting the executor callback in the promise constructor");
    });
}


console.log("Starting");
const p = CreatePromiseWithTimeOut();
console.log("Current state of promise",p);

p.then(
    function fullfillhandler1(value)
    { 
        console.log("Inside fullfillhandler 1 with value as",value); 
        console.log("Promise object is like:",p);
    } , 
    function rejectionhandler1(value)
    {   console.log("Inside rejectionhandler 1 with value as",value); 
        console.log("Promise object is like:",p);
    }
);

p.then(
    function fullfillhandler2(value)
    { 
        console.log("Inside fullfillhandler 2 with value as",value); 
        console.log("Promise object is like:",p);
    } , 
    function rejectionhandler2(value)
    { 
        console.log("Inside rejectionhandler 2 with value as",value); 
        console.log("Promise object is like:",p);
    }
);