function downloadServer1(url , time)
{
    return new Promise(function exec(resolve , reject){
        console.log("Download started");

        setTimeout(() => {
            if(time > 4000)
            {
                reject("taking longer time");
            }
            else 
            {
                console.log("Download Completed");
                resolve("Downloaded Successfully");
            }

        } , time);
    });
}

let p1 = downloadServer1("www.server1.com" , 3000);
let p2 = downloadServer1("www.server2.com" , 7000);
let p3 = downloadServer1("www.server3.com" , 2000);

Promise.all([p1 , p2 , p3]).then(
    function fullfillment(value)
    {
        console.log(value);
    }
);