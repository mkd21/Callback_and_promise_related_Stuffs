function funk()
{
    return new Promise(function exec(resolve , reject)
    {
        let x = 34;

        if(x % 2 == 0)
        {
            console.log("even");
            resolve(x);
            console.log("resolve function called");
            return x;
        }
        else 
        {
            console.log("odd");
            reject(x);
            console.log("reject function called");
            return x;
        }
    });
}