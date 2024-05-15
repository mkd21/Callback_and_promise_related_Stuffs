function timeConsumeByLoop()
{
    console.log("Loop Starts");

    for(let i = 1; i < 10000000000; i++)
    {
        //some task
    }

    console.log("Loop Ends");
}

function timeConsumingByRuntimeFeature()
{
    console.log("Starting Timer");

    setTimeout(function exec(){
        console.log("Timer Completed");
    } , 5000);

}

console.log("Hi");

timeConsumeByLoop();
timeConsumingByRuntimeFeature();
timeConsumeByLoop();


console.log("Bye");