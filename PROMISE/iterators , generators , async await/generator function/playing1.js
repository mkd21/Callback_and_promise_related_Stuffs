function *getValue()
{   let value = 1;

    while(true)
    {
        yield value++;
    }
}

let res = getValue();

for(let i = 1; i <= 10; i++)
{
    console.log(res.next().value);
}