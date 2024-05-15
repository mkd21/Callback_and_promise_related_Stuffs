// ITERATOR EXAMPLE WITH THE TOUCH OF CLOSURE 

function arr_elements(array)
{
    let index = 0;
    function next()
    {
        if(index == array.length)
        {
            return undefined;
        }

        const nextElement = array[index];
        index++;

        return nextElement;
    }

    // return next;   // or we can return object also

    return {next};
}


// lets say some want to access all the elements of array 

const x = arr_elements([12 , 34 , 54, 1 , 0 , 11 , 90 , 45 , 3]);

// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());

// now X is storing an object and can be accessed like this 

console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());