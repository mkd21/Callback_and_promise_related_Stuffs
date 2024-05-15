// const p1 = new Promise( function exec(res , rej) {
//     setTimeout(() => {
//         res("promise is resolved");
//     }, 10000);
// });

function prom()
{
    return new Promise( function exec(res , rej){
        res("promise rejected");
    });
}
async function helper()
{
    const res = await prom();

    console.log("inside async function");
    console.log(res);
}


helper();

console.log("outside ie global piece of code");