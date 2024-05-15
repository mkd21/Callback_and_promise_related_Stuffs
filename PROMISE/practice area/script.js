// function admission(student)
// {
//     return new Promise( (resolve , reject) =>{

//         setTimeout( () => {

//             let studentKaLuck = Math.floor(Math.random() * 10);

//             if(studentKaLuck < 5)
//             {
//                 resolve(`Admission Successful for ${student}`);
//                 console.log(studentKaLuck);
//             }
//             else 
//             {
//                 console.log(studentKaLuck);
//                 reject(`Admission not Successful for ${student}`);
//             }
//         } , 2000);
//     })
// }


// admission("mk")

// .then( (val) =>{
//     console.log(val);
// })

// .catch( (err) =>{
//     console.log(err);
// })

// .finally( () =>{
//     console.log("process finished");
// });








                    // PROMISE METHODS EXAMPLES 
                    // when using promise.all() , remember that all promise should get fullfilled then only it will show the desired output.

                    // if one also fails then it will show the failed promise and not the finished promises

function p1()
{
    return new Promise( (res)=>{
        res("p1 promise resolved")
    });
};

let p2 = () =>{
    return new Promise( (res) => {
        res("p2 promise resolved");
    });
};

let p3 = Promise.resolve(34);


let p4 = new Promise( (resolve) =>
    setTimeout(() => {
        resolve("p4 promise resolved");
    }, 2000)
);

let p5 = new Promise( (res , rej) =>{
    setTimeout( () => {

        rej("p5 got rejected");

    } , 5000)
});

Promise.all([p1() ,p2() , p3 , p4 , p5])
.then( (val) =>{
    console.log(val);
})
.catch( (errMsg) =>{
    console.log(errMsg);
})