// String Methods()
// length
var data  = "Geekster"
console.log(data.length);

/************************************************************* */

// indexOf()
// It will return the first index of character prsent inside String
// console.log(data.indexOf('e'));

/********************************************************************* */

// lastIndexOf()
// Ite will return last index 
// console.log(data.lastIndexOf('e'))

/*********************************************************************** */

// includes
// It will check whether the character you have enetered is present inside or not
// It will return boolean value
// console.log(data.includes('i'));

/************************************************************************* */

// charAt()
// we have to provide indexnumber it will return the character at the index postion
// console.log(data.charAt(5));

/************************************************************************* */

// startsWith()
// It checks the first character in the string and it will return boolean value
// console.log(data.startsWith('K'));

/******************************************************************************* */

// endsWith()
// It returns boolean value
// console.log(data.endsWith('r'));

/****************************************************************************** */

// concat
// use to combine two Strings
// var name = "Geekster";
// var last = "Platform";
// console.log(name.concat(last));

/****************************************************************************** */

// slice()
// It helps to extract the part of the string
// It will not do any thing if you give Starting index bigger than ending index
// console.log(data.slice(3, 6));
// console.log(data.slice(1));
// console.log(data.slice(6,3));

/******************************************************************************* */

// substring()
// It also help to extract the part of string
// console.log(data.substring(2,5));
// console.log(data.substring(5,2)); // If you give stating index greater than ending index then it will just swip the postion

/****************************************************************************** */

// substr()
// It is also do same extrating thing but this is debricated method no longer use
// console.log(data.substr(0,3));

/******************************************************************************** */

// toUpperCase() or toLowerCase()
// console.log(data.toUpperCase());
// console.log(data.toLowerCase());

/***************************************************************************** */

// replace
// console.log(data.replace("r", "p")); // it will return new string with replace value
// console.log(data); // it will not change the original string 

/*********************************************************************************** */

// fontColor()
// it will change the color of the string it is visible on browser it will not work on console
// console.log(data.fontcolor("red"));

/********************************************************************************** */

var str = "       in fo         "; // leading space // white space are between the string
console.log(str);

// trimm()
// It will exclude the leading spaces in the string but not white spaces
// console.log(str.trim());

/******************************************************************************* */

// split()
// It is spliting entire String
// it depends on parameter()
console.log(data.split(" "));

var data1 = "Geekster Platform"
console.log(data1.split(" "));

