function funk()
{
    return new Promise(function exec(resolve , reject)
    {
        let x = 34;

        if(x % 2 == 0)
        {
            console.log("even");
            return x;
        }
        else 
        {
            console.log("odd");
            return x;
        }
    });
}

let x = funk();
console.log(x);   // promise object state will be pending