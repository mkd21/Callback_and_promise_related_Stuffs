function promiseCreator()
{
    return new Promise(function exec(res , rej)
    {
        console.log("I am promise creator constructor");
        const value = "returning form promiseCreator";
        res(value);
    });
}


let x = promiseCreator();

x
.then(
    function fullfillmentHandler1(value)
    {
        console.log("inside the fullfillment handler 1");
        return "string return kr rha hu for chaining of (.then) ka example";
    } ,
    function rejectionHandler1(){}
)
.then(
    function fullfillmentHandler2(value)
    {
        console.log("whatever value will be retuned by fullfillemthndlr 1 it will be my fullfilled value ie:" , value);
    }
);

// if 1st .then dont return anything then the value of second (.then) will be "undefined"