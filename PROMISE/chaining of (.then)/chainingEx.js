function createPromise()
{
    return new Promise(function exec(resolve , reject){
        
        setTimeout(function funk(){
            console.log("Resolving after 5 seconds");
            resolve(12);
        } , 5000);
    });
}

let x = createPromise();

x 
.then(
    
    function fun1(value)
    {
        console.log("value after 5 sec is", value);

        return new Promise(function exec(resolve , reject){
            console.log("returnig promise form 1st (.then) function");

            setTimeout(function waiter(){
                resolve("finally reolved...yeaah");
            } , 2000);
        });
    }
)

.then(
    function fun2(value)
    {
        console.log("whatever is returned form 1st (.then) is -->",value);
    }
)
