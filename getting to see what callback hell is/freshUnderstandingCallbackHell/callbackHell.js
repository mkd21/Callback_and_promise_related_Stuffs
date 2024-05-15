// make a system where 
// users can order a product 
// after that payment should happen and 
// after that order summary should be generated and at the last  
// wallet balance should get updated 

// let's say there is an api to do all these stuffs 



api.placeOrder(cart , function (){

    api.makePayment( () =>{

        api.orderSummary( function (){

            api.updateWallet();
        })
    })
})