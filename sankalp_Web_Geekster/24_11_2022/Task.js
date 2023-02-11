// WAF and return arr so that it only conatains elements that sum to the value of 10,
// const arr = [2,4,5,1,7,5,2,1];

var arr = [2,4,5,1,7,5,2,1];

// function sum(){
//     for(var i=0;i<arr.length;i++){
//         for(var j=i+1;j<arr.length-1;j++){
//             for(var k=j+1;k<arr.length-2;k++){
//                 if((arr[i]+arr[j]+arr[k])==10){
//                     console.log(arr[i], arr[j], arr[k]);
//                 }
//             }
//         }
//     }
// };
// sum();

// function filterArray(){  // [4,5,1]
//     // splice shift
//     arr.shift();
//     arr.splice(3);
//     // console.log(arr)
//     return arr;
// }
// console.log(filterArray());

function array(){  // [5,5]
    arr.splice(0,2);
    console.log(arr);
    arr.splice(1,2);
    console.log(arr);
    arr.splice(-2);
    return arr;
}
console.log(array());