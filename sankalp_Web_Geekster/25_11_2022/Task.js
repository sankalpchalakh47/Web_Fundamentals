// WAF so that it returns an array containing all the keys of properties in the objects.

let users = {
    Alan: {
        age: 27,
        online: false,
    },
    Jeff: {
        age: 32,
        online: true,
    },
    Sarah: {
        age: 48,
        online: false,
    },
    Ryan: {
        age: 19,
        online: true,
    },
};
//  o/p ["Alan", "Jeff","Sarah","Ryan"]

// var temp = [];
// function obj(){
//     var i=0
//     for(var key in users){ // To iterate through object to get keys we use this
//         temp[i] = key;
//         i++;
//     }
//     console.log(temp);
// };
// obj();

/*****************  OR  ****************** */

// function getObjectKeys(){
//     var keyOfObject = [];

//     keyOfObject = Object.keys(users);
//     return keyOfObject;
// }
// console.log(getObjectKeys());

/*****************  OR ********************** */

// function getKeys(){
//     var temp1 = [];
//     for(var key in users){
//         temp1.push(key);
//     }
//     return temp1;
// }
// console.log(getKeys());

/***************************************************************** */

// WAF To Add element  in friends Element and return all the element
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };

  function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend);
    // Only change code above this line
    return userObj.data.friends;
  }
  
  console.log(addFriend(user, 'Pete'));