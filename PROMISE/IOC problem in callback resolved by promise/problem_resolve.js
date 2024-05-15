function download(url , funk)
{
    console.log("Start downloading in 5s");

    setTimeout(function fun(){
        console.log("content downloaded");

        const content = "ABCDE";

        // funk(content);
        
        // ya to 2 baar call krde
        // funk(content);
        // funk(content);

        // ya to fir call kre hi nhi 
    } , 5000);
}


download("www.xyz.com" , function downloadContent(data) {
    console.log("Downloaded content is",data);
});