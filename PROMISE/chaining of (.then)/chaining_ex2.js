function createPromise()
{
    return new Promise(function fun1(res){
        console.log("I will return a resolved promise");
        res("resolve promise from main +function");
    });
}


let x = createPromise();
x
.then(
    function fulfillmentHandler(value)
    {
        console.log("I will take value form main function");

        return new Promise(function fun2(res){
            res("returned promise from 1st (.then)");

            console.log("now returning from 1st .then function");
        });
    }
)

.then(
    function fun3(value)
    {
        console.log("My value will be promise returned by above (.then) ie", value);
    }
);

