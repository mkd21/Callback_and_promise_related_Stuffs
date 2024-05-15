function download(url)
{
    return new Promise(function exec(resolve , reject)
    {
        console.log("Started Downloading");

        setTimeout(function dnld(){
            console.log("content downloaded");
            const content = "ABCDEF";
            resolve(content);

        } , 5000);
    });
}

function writeFile(file)
{
    return new Promise(function exec(res , rej){
        console.log("Started writing the file",file);

        setTimeout(function writing(){
            console.log("Finished Writing");

            const format = ".txt";

            res(format);
        } , 5000);
    });
}


function upload(file , linkToUpload)
{
    return new Promise(function exec(resolve , reject){
        console.log("started uploading the",file ,"on", linkToUpload);

        setTimeout(function uploading(){
            const status = "SUCCESS";
            resolve(status);

        }, 5000);
    });
}


download("www.xyz.com")
.then(
    function downloadDeatils(value)
    {
        console.log("Download content is", value);
        return writeFile(value);
    }
)
.then(
    function writingInFile(value)
    {
        console.log("saved the file with the extension",value);
        return upload(value , "uploadhere.com");
    }
)
.then(
    function uploadDetails(value)
    {
        console.log("File upload status is",value);
    }
)