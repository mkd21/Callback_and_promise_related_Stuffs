function Download(dnld_link)
{
    console.log("Dowmload Started...")
    return new Promise(function exec(resolve , reject){
        setTimeout(function (){
            console.log("Download Completed");
            const content = "ABCDEF";

            resolve(content);
        } , 3000);
    });
}

function writeAndSave(file)
{
    return new Promise(function exec(resolve , reject){
        console.log("Writing in a file");

        setTimeout( ()=> {
            console.log("finished writing");

            const format = ".txt";

            resolve(format);

        } , 3000);
    });
}

function upload(file , uploadLink)
{
    return new Promise( (resolve , reject) => {
        console.log("Started uploading",file,"on",uploadLink);

        setTimeout(() => {
            const stage = "SUCCESS";

            resolve(stage);
        }, 4000);
    });
}


async function executor()
{
    const dowmloadStatus = await Download("www.xyz.com");
    console.log("content of file downloaded is",dowmloadStatus);

    const writeSave = await writeAndSave(dowmloadStatus);
    console.log("format of the file is",writeSave);

    const uploadStatus = await upload("secret file" , "www.googledrive.com");
    console.log("Status of the file upload is",uploadStatus);
}

executor();