function funk()
{
    return new Promise(function exec(resolve , reject)
    {
        let x = 35;

        if(x % 2 == 0)
        {
            console.log("even");

            console.log("resolve function called");
            resolve(x);
            console.log("resolve function called again");
            resolve(12);

            return x;
        }
        else 
        {
            console.log("odd");
            console.log("reject function called");
            reject(x);
            console.log("reject function called again");
            reject(89);

            return x;
        }
    });
}

let x = funk();
console.log(x);   // promise object will have the value that is assgined to it at first