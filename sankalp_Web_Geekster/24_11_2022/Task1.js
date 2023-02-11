// Find the factorial of given number

function findFact(num){
    if(num<=0){
        return 1;
    }
    return num * findFact(num-1);
}
console.log(findFact(5));

function fact(num){
    if(num==0){
        return 1;
    }
    for(var i=num;i>1;i--){
        num = (i-1) * num; 
    }
    return num;
}
console.log(fact(5));

