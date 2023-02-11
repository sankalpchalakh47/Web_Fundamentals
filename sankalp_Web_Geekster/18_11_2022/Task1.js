var products = [{
    brand: "Apple",
    price: 90000,
},
{
    brand: "Oppo",
    price: 50000,
},
{
    brand: "oneplus",
    price: 45000,
},
];

// Write one fun and pass argument in fun argument is brand name and print it details

// function check(brand) {
    // for (var i = 0; i < products.length; i++) {
    //    if(products[i].brand=="oneplus"){
    //      console.log(products[i]);
    //      break
    //     }
    //    else{
    //      console.log("not avilable");
    //     }
    // }
// }
// check("oneplus");


// using indexof can we find certain element is present in array or not
// var arr = ["Apple","Oppo","OnePlus","Micromax"]

// function findElement(elementName){
//    var status = arr.indexOf(elementName)

//    if(status === -1){
//     console.log(elementName+" does not exist in the given array");
//    }
//    else{
//     console.log(elementName+" does exist in the given array")
//    }
// }

// findElement("smasung"); // Case sensitive

// includes()
var arr = [10,20,30,40,90,80];
var result = arr.includes(40);
console.log(result);
var result = arr.includes(410);
console.log(result);

function findelement(element){
    var val = arr.includes(element);
    if(val==true){
        console.log("yes");
    }
    else{
        console.log("No");
    }
}
findelement(160);