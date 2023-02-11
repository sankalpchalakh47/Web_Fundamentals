// WAF where it takes two argument one is arr and another is array we have to return an array
// which does not contain the argument elem inside it we have to return the array

// function filteredArray(arr, elem) {
//     var newArr = [];
//     // Only change code below this line
//       for(var i=0;i<arr.length;i++){
//         if(arr[i].indexOf(elem)===-1){
//           newArr.push(arr[i]);
//         }
//       }
//     // Only change code above this line
//     return newArr;
//   }
  
//   console.log(filteredArray([[1, 2, 4], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// WAF where it will count the number online is true in key and return it

var users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
        var count = 0;
        for(var key in usersObj){
            if(usersObj[key].online===true){
                count++;
            }
        }
        return count;
    // Only change code above this line
  }
  
  console.log(countOnline(users));