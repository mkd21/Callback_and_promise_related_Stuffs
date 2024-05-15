function Download()
{
    console.log("download Started");

    return new Promise(function exec(resolve , reject){

        setTimeout(function f1(){
            console.log("Downloaded");

            const fileName = "ABCDE";

            reject(fileName);

        } , 1000);

    });
    
}

function Write(file)
{
    console.log("Started Writing in",file);

    return new Promise(function exec(resolve , reject){

        setTimeout(function f2(){
            console.log("failed to write");
    
            reject(file);
        } , 3000);
    });
}

function upload(file , uploadLink)
{
    console.log("Started to upload");

    return new Promise(function exec(res , rej){
        const State = "SUCCESS";

        res(State);
    });
}



Download()
.then(
    function fulfillhandler1(value)
    {
        console.log("Content of the file is",value);

        return Write(value);
    }
)

.then(
    function fulfillhandler2(value)
    {
        console.log("Format of the file is",value);
        return upload(value);
    }
)

.then(
    function fulfillhandler3(value)
    {
        console.log("uploaded successfully",value);
    }
)

// moment the rejection will be faced by a promise the execution will enter this block skipping all the (.this) methods
.catch(
    (error) => {
        {
            console.log("in this block because an exception has occured",error);
        }
    }
)


.finally(
    (always) => {
        console.log("I will be executed everytime no matter if promise gets resolved or rejected");
    }
)