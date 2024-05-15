// Will execute the function again and again after completing the time interval

x = setInterval(function funk(){console.log("Hi");} , 1000);

// clearInterval(x);  // used to stop the setInterval function

console.log(typeof(x));   // here we will get Object but in browser we will get number 
                        // so we can say that return type of a function depends on runtime