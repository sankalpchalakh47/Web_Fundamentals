// in---- Object
// of---- Array

// Two Ways To Access the Value of The Property

var data = {
    name: "Geekster",
    city: "Gurugram",
    id: 101
};

console.log(data.city); // For Accessing the the value of Key City we are using '.' 
console.log(data['city']); // in case if the kEy has Space for ex ('city name' = "pune") In this Case [] this is use

// In Operator with for Loop
// In Operators are used for object
// Syntax
// for(var key in data){ // in operators are used if you want to get access of Keys of a object
//     console.log(key);
// }

// for(var key in data){
//     console.log(key,":",data[key]);
// }

// of Operator
// Of operators are used for Array
var students = ["Kabir", "Raj", "Karuna", "Aditi", "Heema"];

for(var element of students){ // of will print all the elements of the property
    console.log(element);
}