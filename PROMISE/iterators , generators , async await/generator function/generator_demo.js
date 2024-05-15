function *GeneratorFunk()
{
    console.log("First line of the generator function");
    yield 1;
    yield 2;
    console.log("Middle area 1");
    console.log("Middle area 2");
    yield 4;
    yield 23;
}

let x = GeneratorFunk();    // we are calling the function but it will not get executed immediately

                // THEY ALL WILL PRINT THE OBJECT WITH PROPERTY [VALUE AND DONE]
                
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());