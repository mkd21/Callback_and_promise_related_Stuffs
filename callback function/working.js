function exec(x , fn)
{
    console.log("I am HOF");
    fn();
}

exec(34, function funk(){
    console.log("I am CallBack Function");
});


// Function as an arguement can be also given as first parameter but generally a normal arguement is given first

// function exec(fn , x)
// {
//     console.log("I am HOF");
//     fn();
// }

// exec(function funk(){console.log("I am CallBack Function")});


// SET TIMEOUT IS ALSO A HOF 

/*
 *  it executes the function after some delay which we mention as second arguement. delay is in ms
 */

setTimeout(function fn(){
    console.log(" Getting executed after some delay");
} , 3000);
