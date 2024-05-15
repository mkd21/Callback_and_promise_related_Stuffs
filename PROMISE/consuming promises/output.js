function createPromise()
{
    return new Promise(function exec(resolve , reject){
        setTimeout(function funk(){
            console.log("rejecting the promise");
            reject("rejected");
        } , 1000);
    });
}

let p = createPromise();

p.then(
    function fulfillHandler1(value){
        console.log("fulfillerd 1 with the value", value);
    } ,
    function rejectionHandler1(value){
        console.log("rejected 1 with the value" , value);
    }
);
p.then(
    function fulfillHandler2(value){
        console.log("fulfillerd 2 with the value", value);
    } ,
    function rejectionHandler2(value){
        console.log("rejected 2 with the value" , value);
    }
);

console.log("ending");