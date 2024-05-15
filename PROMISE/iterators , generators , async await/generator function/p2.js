function *playing()
{
    const x = 10;
    yield 11;

    console.log("Entering after a yield");

    const y = x + (yield 30);

    console.log("value of y is",y);
}


const x = playing();

// console.log("1st", x.next());
// console.log("2st", x.next());
// console.log("3st", x.next());
// console.log("4st", x.next());

console.log("1st", x.next());   
console.log("2st", x.next());
console.log("3st", x.next(12));
console.log("4th", x.next());