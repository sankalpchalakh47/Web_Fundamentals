// Remove duplicate elements from  array
var arr = [10,20,30,10,50,90,90,100,20,30,40,20,30,10,100,10]
// By using Reduce()

var newValue = arr.reduce(function(initialValue,element){
    if(initialValue.indexOf(element)==-1){
        initialValue.push(element);
    }
    return initialValue;
},[]);

console.log(newValue);