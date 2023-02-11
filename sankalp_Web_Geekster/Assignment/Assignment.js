var Students = [  // Take 7 Objects
    {
        name: "S1",
        gender: "Male",
        id: 101,
        city: "Hyd",
    },
    {
        name: "S2",
        gender: "Female",
        id: 102,
        city: "Pune",
    },
    {
        name: "S3",
        gender: "Male",
        id: 103,
        city: "Mumbai",
    },
    {
        name: "S4",
        gender: "Female",
        id: 104,
        city: "Hyd",
    },
    {
        name: "S5",
        gender: "Male",
        id: 105,
        city: "Pune",
    },
    {
        name: "S6",
        gender: "Female",
        id: 106,
        city: "Hyd",
    },
    {
        name: "S7",
        gender: "Male",
        id: 107,
        city: "Pune",
    },
]

// /* 1 */for (var i = 0; i < Students.length; i++) {
//     if (Students[i].city === "Hyd") {
//         console.log(Students[i].name)
//     }
// }

// console.log("---------------------------------------")

// /* 2 */ for (var i = 0; i < Students.length; i++) {
//             if(Students[i].gender==="Male"){
//                 console.log(Students[i].name)
//             }
// }

// console.log("-----------------------------------------")

// /* 3 */ for(var i=0;i<Students.length;i++){
//         if(Students[i].gender==="Female"){
//             console.log(Students[i].name)
//         }
// } 

// console.log("---------------------------------------------")

/* 4 */ for(var i=0;i<Students.length;i++){
    // console.log(Students.length)
        if((Students[i].city==="Hyd") || (Students[i].city==="Pune")){
            console.log(Students[i].name)
        }
}

console.log("------------------------------------------------")

// * 5 */ for(var i=0;i<Students.length;i++){
//         console.log(Students[i].name + " "+ Students[i].city)
// }/

// Print Those Students who Belongs from city hyd
// Print only Male Students
// Print only Female Students
//Print those students who belongs from city hyd and pune
// Print all the students name, city