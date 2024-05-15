function timeConsumeByLoop()
{
    console.log("Loop Starts");

    for(let i = 1; i < 10000000000; i++)
    {
        //some task
    }

    console.log("Loop Ends");
}

function timeConsumingByRuntimeFeature0()
{
    console.log("Starting Timer0");

    setTimeout(function exec(){
        console.log("Timer Completed 0");

        for(let i  = 0 ; i< 1000000000; i++)
        {
            //some work
        }
    } , 5000); // 5sec

}

function timeConsumingByRuntimeFeature1()
{
    console.log("Starting Timer1");

    setTimeout(function exec(){
        console.log("Timer Completed 1");
    } , 0); // 0sec

}
function timeConsumingByRuntimeFeature2()
{
    console.log("Starting Timer2");

    setTimeout(function exec(){
        console.log("Timer Completed 2");
    } , 200);  // 2 sec

}

console.log("Hi");

timeConsumeByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumeByLoop();

console.log("Bye");
