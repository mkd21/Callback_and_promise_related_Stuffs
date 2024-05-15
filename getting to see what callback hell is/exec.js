function download(url , cllbck)
{
    let a = url;
    console.log("Starting Download from ", url);

    setTimeout(function funk(){
        console.log("Content Downloaded");

        const content = "ABCDEF";
        cllbck(content);

    } , 4000);
}


function SaveFile(data , cb)
{
    console.log("Started writing in a file with data",data);

    setTimeout(function fun(){
        console.log("Completed writing in a file");

        const extension = ".txt";
        cb(extension);

    } , 5000);
}

function upload(url , file , cb)
{
    console.log("Uploading started to url",url);

    setTimeout(function(){
        const response = "SUCCESS";

        cb(response);
    } , 5000);
}


// if we call in this order then the result will not be as aspected

// download("www.xyz.com" , function fun(content){
//     console.log("Downloaded content is",content);
// });

// SaveFile("highly confidential file", function fun1(content1){
//     console.log("file saved with extention",content1);
// });

// upload("www.xyz.com" , "xyz story" , function fun2(response){
//     console.log("file upload status", response);
// });


    // IN ORDER TO GET THE DESIRED OUTPUT IE IN CHRONOLOGICAL order we will need callbacks in chained manner which will lead to callback hell  let's see



download("www.xyz.com" , function fun1(content){
    console.log("Downloaded content is:", content);

    SaveFile("ABCDEF" , function fun2(extension){
        console.log("file saved with data",extension);

        upload("savehere.com", "checker file" , function fun3(response){
            console.log("file upload status",response);
        });
    });
});