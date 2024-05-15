function resolve()
{
    return new Promise((resolve , reject) => {
        console.log("Resolving started");
        
        setTimeout(function delay(){
            resolve("problem resolved");
        } , 3000);
    });
}

async function resolveCaller()
{
    console.log("resolver function called");

    const res = await resolve();

    console.log("visited the resolver function already");

    console.log(res);
}   


resolveCaller();