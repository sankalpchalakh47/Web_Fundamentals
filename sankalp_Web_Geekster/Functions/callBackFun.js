/* 
    Function fn(f){      Any Function Which Is Passed
        --------         as Argument That Argumented
        --------         Function is Called CallBack
        --------         function

    }                    Callback Function will not have any name

    fn(function({        Calling Back Function
        -------
        -------          Callback can be accessed using
                         parameter name

    }))
*/

function fn(f){
    f("Sankalp");
    console.log("I am Main Function");
    f("Chalakh");
}

fn(function(name){
    console.log("I am callBack Function code");
    console.log(name);
});