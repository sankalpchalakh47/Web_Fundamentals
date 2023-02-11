//join()
// it is used to convert your array into String with some Delemeter

var arr = [10,20,30,40];
// console.log(arr); // It is printing Array
// console.log(arr.join()); // It is printing String

// var a = arr.join()
// console.log(a) // It prints String

// console.log(arr.join("_")); // We can pass any parameter if we dont pass it will take , as default 

// CONCAT
// concat is not changing the present array it is creating new array and concating all elements in it
var a1= [10,20]
var a2 = [30,40]

// console.log(a1.concat(a2)); // [10,20,30,40]
// console.log(a1); // [10,20]
// console.log(a2) // [30,40]

// console.log(a2.concat(a1)); // [30,40,10,20]

/*********************************************************************** */

// every()
// To check certain condition on each and every element of array
// it will return true when the condition you have given will statisfy by each and every element
// It will return false when any one element will not statisfy the condition 
// Syntax
// var res = arr.every(function(element,index){
//    return <condition>
// });

// var arr1 = [10,20,30,40,50]; // >5

// var res = arr1.every(function(ele,ind){
//     return ele>5
// });

// console.log(res);

// some()
// It is also used to check certain condition on each and every element of array.
var arr2 = [10,20,30,40,50];

// var res = arr2.some(function(ele,ind){
//     return ele<5 // f,f,f,f,f
// });
// console.log(res);

// var res = arr2.some(function(ele,ind){
//     return ele>45 // f,f,f,f,t
// });
// console.log(res);

/************************************************************************ */

//filter()
//It is used to filter the given array based on certain condition

// var arr3 = [20,50,90,50,30];
// print all the elements of this array which are greater then 30
// var res = arr3.filter(function(ele,ind){
//     return ele>30  //
// });
// console.log(res); // [50,90,50]

//WAF to print all electronics Data using Filter

var products = [
    {
        name: "Laptop",
        category : "Electronics",
        price: 50000,
    },
    {
        name: "Gold Ring",
        category : "Jwelery",
        price: 1000000,
    },
    {
        name : "Tshirt",
        category : "MensClothing",
        price: 10000,
    },
    {
        name: "Mobile",
        category : "Electronics",
        price: 5000,
    },
    {
        name: "Gold Chain",
        category : "Jwelery",
        price: 10000,
    },
    {
        name : "shirt",
        category : "MensClothing",
        price: 1000,
    },
];

// var res = products.filter(function(ele,ind){
//     return ele.category=="Electronics";
// });
// console.log(res);

/*********************************************************************** */

// Map()
// map is used to do same operation on each and every 

var array = [10,20,30,40] // output [20,30,40,50]
// Adding 10 to each element

var newArray = array.map(function(ele,ind){
    return ele + 10;
});

console.log(newArray);

var emp = [
    {
        id: 103,
        name: "E3",
        city: "Pune",
    },
    {
        id: 104,
        name: "E4",
        city: "Hyderabad"
    },
    {
        id: 105,
        name: "E5",
        city: "Mumbai"
    },
    {
        id: 106,
        name: "E6",
        city: "Banglore",
    },
];

var empDetails = emp.map(function(ele,ind){
    return ele.id;
});

console.log(empDetails)

var empDetails = emp.map(function(ele,ind){
    return {id: ele.id, name: ele.name};
});

console.log(empDetails)