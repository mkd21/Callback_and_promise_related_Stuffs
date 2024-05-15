Promise.resolve("foo")

.then(
    function p1(string)
    {
        return new Promise(function fun1(res , rej)
        {
            setTimeout(function fun1(){
                string += "bar";
                res(string);
            } , 5000);
        });
    }
)

.then(
    function p2(string)
    {
        setTimeout(function fun2(){
            string += "baz";
            console.log(string);
        } , 1);

        return string;
    }
)

.then(
    function p3(string)
    {
        console.log(string);
    }
);