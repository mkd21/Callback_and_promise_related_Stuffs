// wap to perform mathematical operation using callback function 

/*
    instructions:

    define a HOF called MathOperation that takes 3 parameters x , y  and operation.

    implement 2 callback functions 


     add -> returns the result
     and 
     sub -> returns the result

    use the MathOperation to perform addition and substraction on 2 variables a and b


*/ 


function MathOperation(x , y , operation)
{
    console.log( operation(x , y) );
}

const add = (a , b) =>{
    return a + b;
};

const sub = (a , b) =>{
    return Math.abs(a - b);
};

MathOperation(2 , 3 , add);
MathOperation(5 , 9 , sub);