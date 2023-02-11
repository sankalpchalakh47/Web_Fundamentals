// WAF so that it returns true if the object passed to it contains Property key
// As Alan, Jeff, Sarah and Ryan
// and returns false if it does not contain any one of the
// following keys or any different key

let users = {
    Alan: {
        age: 27,
        online: true,
    },
    Jeff: {
        age: 32,
        online: true,
    },
    Sarah1: {
        age: 40,
        online: true,
    },
    Ryan: {
        age: 20,
        online: true,
    },
};

function property(usersObj){
   var keysArr = []
   var boolean;
//    var temp = []
    // keysArr = Object.keys(usersObj)   // Or // Both ways are used to get key
    for(var key in usersObj){
        keysArr.push(key);
    }
    keysArr.forEach(function(element){
        if(element=='Alan' || element =='Jeff' || element=='Sarah' || element=='Ryan'){
            // temp.push(true);
           boolean = true;
        }
        else{
            // temp.push(false);
            boolean = false;
        }
    });
    return boolean;
    // return !temp.includes(false); // Includes will check the if ele is exist in temp array or not
                                    // If it exists then it will return true or else flase ! will change the output
                                    // It will make true as (fasle) and False as(true)
    // console.log(keysArr);
};
console.log(property(users));