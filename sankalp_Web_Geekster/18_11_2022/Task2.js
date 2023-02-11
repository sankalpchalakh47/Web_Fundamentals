// // WAF to print each and every element of array by appending brand word on element

// var arr = ["Apple", "Oppo", "OnePlus", "Micromax"];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]+ " brand");
// }

// //foreach()
// arr.forEach(function(element,index){
//     console.log(index,element);
// });

// arr.forEach(function(element,index){
//     console.log(element + " Brand");
// });

// WAF to print all those objects whose brand name is Apple using For each
// WAF tp print all those elements whose price is less than 50000 

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
{
brand: "Samsung",
price: 80000,
},
{
brand: "Apple",
price: 5000,
},
{
brand: "Apple",
price: 15000,
},
];

// function print(){

// products.forEach(function(element,index){
//    if(element.brand === "Apple"){
//         console.log(element)
//    }
// });
// }
// print();

function price(){
    products.forEach(function(element,index){
        if(element.price<=50000){
            console.log(element);
        }
    });
}
price();

//WAF to print all those elements which are greater than 50
//WAF to print all those elements which are less than 50
//WAF to print all those elements which are in between 30 and 80

var studentsMarks = [40,50,60,70,80,90,30,58,88,98,48,29];

// function student(){
//     studentsMarks.forEach(function(element,index){
//         if(element>50){
//             console.log(element)
//         }
//     });
// }
// student();

//****************************************************** */

// function stu(){
//     studentsMarks.forEach(function(element,index){
//         if(element<50){
//             console.log(element);
//         }
//     });
// }
// stu();

// ******************************************************

function stuM(){
    studentsMarks.forEach(function(element,index){
        if(element>30 && element<80){
            console.log(element);
        }
    });
}
stuM();