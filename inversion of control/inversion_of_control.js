function paymentGateway(fn , x)
{
    fn(x * x);
    fn(x * x);
}

paymentGateway(
    function funk(num) //due to callback , the control of callback function implementation is passed to 
    {                  //another function . This is inversion control. it can lead to many serious problems. Do the demo and see
        console.log("payment done" , num);
    }
    , 9
);