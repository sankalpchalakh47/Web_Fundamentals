var data = [
    [0,3,5],
    [8,9,7],
    [10,11,12],
];

// console.log(data[2][2]);

var details = [
    [
      10,
      20,
      {
        name: {
            first: "Kabir",
            last: "Sagar",
        },
      },   
    ],
    [
        10,
        20,
        {
          adress: [
            10,
            20,
            {
                city1 : "pune"
            },
          ],
        },   
    ],
];

console.log(details[0][2].name.last);
console.log(details[1][2].adress[2].city1);