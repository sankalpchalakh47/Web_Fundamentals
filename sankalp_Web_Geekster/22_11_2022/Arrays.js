// Slice()
// It will extract part of array and stores in a new array
// It will return new Array
// Syntax --> slice(startingIndex,endingIndex)

// var arr = [20,30,40,50,60,70];
// console.log(arr.slice(1,3)); // It will not include Last Index
// console.log(arr.slice(1,4));

// console.log(arr.slice(3,6));
// console.log(arr.slice(3));

// console.log(arr.slice(-3));
// console.log(arr.slice(1,-1));

//***************************************************************** */

//Splice()
//It is used to Modify Array
//Delete the elements at any position
// insert new Elements at any position
// Replace the Elements
// Syntax --> <arrayName>.splice(startingIndex,CountOfElement) --> This is for removing the elements from the array
// For insert <arrayname>.splice(startingIndex,countofElements,newElement)

var arr = [20,30,40,50,60,70]; // It will Modify The  Exiting Array

// console.log(arr);
// console.log(arr.splice(2,1)) // Deleting 40
// console.log(arr.splice(2,2)) // 40 50
// console.log(arr.splice(4,1)) // 60 
// console.log(arr.splice(1))// It will Remove all the element
// console.log(arr);

// console.log("Removed", arr.splice(2,1,100)) // It will insert 100 in place of 40
// console.log(arr);
// console.log("Removed", arr.splice(2,2,100,200));
// console.log(arr);

// We dont want to remove we want to insert at particular position
// console.log(arr.splice(2,0,200,100)); // [20,30,200,100,40,50,60,70]
// console.log(arr.splice(3,0,200,100)); // [20,30,200,100,40,50,60,70] 
// arr.splice(-2); // It will remove last two elements
// console.log(arr);

/*************************************************************************** */

// reduce()
// It will execute a callback function if you pass to it as first Argument
// arr.reduce(function(initialValue,startingElement){

// },initialValue)

var array = [10,20,30,40,50]

// var newValue = array.reduce(function(initialValue,startingElement){ // 0 10
//     console.log(initialValue, startingElement)
//     return initialValue + 100;
// }, 0
// );


// var newValue = array.reduce(function(initialValue,startingElement){ // 0 10
//     console.log(initialValue, startingElement)
//     return initialValue + startingElement;
// }, 0
// );
// console.log(newValue);


// var newValue = array.reduce(function(initialValue,startingElement){ // 0 10
//     console.log(initialValue, startingElement)
//     // 500 10
//     // 100 20
//     // 100 30
//     // 100 40
//     // 100 50
//     return 100;
// }, 500
// );
// console.log(newValue); //100


// var newValue = array.reduce(function(initialValue,startingElement){ // 0 10
//     console.log(initialValue, startingElement)
//     return initialValue;
// },
// ); // If we Dont Provide Initial value then it will take the First Element of The Array 
// and starts printing =e
// 10 20
// 10 30
// 10 40
// 10 50

/************************************************************* */

//reverse()
// It will just reverse your array
 
var abc = [10,20,30,40,50,60,70,80,90];

var newValue =[];
function vari(){
    for(var i=0;i<abc.length;i++){
        newValue[i] = abc[i];
    }
}
vari();
console.log(newValue);
console.log(newValue.reverse());

/***************************************************** */

// freecodeCamp.com
// developer.mozilla.org
// Medium.com
// GeeksforGeeks.com
// MDN javascript

//reactjs.org
// W3c --> for HTMl CSS
// nodejs.org
// mongodb.com
// Expressjs.org