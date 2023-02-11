// var student = {
//     firstName: "Rohit",     // This is not structured way of creating object
//     lastName: "Sharma",     // Accessing data is straight forward
//     city: "Mumbai",
//     state: "Mh",
//     Area: "Andheri",
//     streetNo: 10,
// };

// // Structured way of writing object (nested)

// var student1 = { 
//     name:{
//         firstname: "Cristiano",
//         lastName: "Ronaldo",
//     },
//     Origin:{
//         country:"Portugal",
//         city: "Lisbon",
//     },
//     Address: {
//         city: "Delhi",
//         state: "NCR",
//         Area: {
//             area1: "10",
//             area2: "20",
//         },
//     },

// };

// console.log(student1.Address.Area.area2);

var details = [
    { 
        name: {
            firstn: "S1",
            lastN: "L1",
        },
        location:{
            city: "Delhi",
            State: "NCR",
        },
    },
    {
        name:{
            firstN: "S2",
            lastN: "L2",
        },
        location:{
            city: "Pune",
            State: "MH",
        },
    },
    {
        name: {
            firstN: "S3",
            lastN: "L3",
        },
        location:{
            city: "Kanpur",
            state: "UP",
        },
    },
];

// Print cit of second user
// change state of third user and print it
// print all the location details of all user

// for(var i=0;i<details.length;i++){
//     if(details[i].name.firstN=== "S2"){
//         console.log(details[i].location.city);
//     }
// }

// for(var i=0;i<details.length;i++){
//     if(details[i].name.firstN==="S3"){
//         details[i].location.state = "luck";
//         console.log(details[i].location.state)
//     }
// }

// for(var i=0;i<details.length;i++){
//     console.log(details[i].location)
// }

var D = {
    data: [
        {
            name: {
                first: "Rahul",
                last: "Jais",
            },
            location:{
                India: {
                    State: {
                        name: "MH",
                        city: [
                            {
                                name: "Nagpur",
                                area: {
                                    sector: "1",
                                },
                            },
                        ],
                    },
                },
            },
        },
    ],
}

D.data[0].location.India.State.city[0].name = "Pune";

console.log(D.data[0].location.India.State.city[0].name);
console.log(D.data[0].location.India.State.city[0].area.sector);