function GenerateRandom(num)
{
    return Math.floor(Math.random() * num);
}

function synchronousContent()
{
    return new Promise(function exec(resolve , reject)
    {   
        for(let i = 0; i < 10000000000; i++)
        {
            // some work
        }

        let val = GenerateRandom(10);

        if(val % 2 == 0)
        {
            resolve(val);
        }
        else 
        {
            reject(val);
        }
    }); 
}

let x = synchronousContent();
console.log(x);