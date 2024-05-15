function Download(dnld_link)
{
    console.log("Dowmload Started from",dnld_link);

    return new Promise(function exec(resolve , reject){
        setTimeout(function t1(){
            console.log("Download Completed");
            const content = "ABCDEF";

            resolve(content);
        } , 3000);
    });
}

function writeAndSave(file)
{
    return new Promise(function exec(resolve , reject){
        console.log("Writing in a file", file);

        setTimeout( function t2() {
            console.log("finished writing");

            const format = ".txt";

            resolve(format);

        } , 8000);
    });
}

function upload(file , uploadLink)
{
    return new Promise( (resolve , reject) => {
        console.log("Started uploading",file,"on",uploadLink);

        setTimeout(function t3()
        {
            const stage = "SUCCESS";

            resolve(stage);
        }, 4000);
    });
}


// the moment below async function see await keyword it will turminate the function ---> jut like yield keyword

/*
        after the fullfillment of of a promise , steps() function is go inside (micro task queue) 

        this will happen everytime when a promise gets resolved 
*/

async function steps()        // async function will always return a promise
{
    const downloadStatus = await Download("www.xyz.com");
    console.log("content of file downloaded is",downloadStatus);

    const writeSave = await writeAndSave(downloadStatus);
    console.log("format of the file is",writeSave);

    const uploadStatus = await upload("secret file" , "www.googledrive.com");
    console.log("Status of the file upload is",uploadStatus);

    return uploadStatus;
}

steps().then(       

    function p1(value) 
    {
        console.log("We have completed the steps with",value);
    }
);

console.log("outside");

for(let i = 1; i< 10000000000; i++){}

setTimeout(function t4() 
{
    console.log("Timer Done");
} , 4000);

console.log("for loop done");