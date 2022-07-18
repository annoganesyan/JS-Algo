 /*
There is a single operator in JavaScript, capable of providing the remainder of a division operation.
Two numbers are passed as parameters.
The first parameter divided by the second parameter will have a remainder, possibly zero. 
Return that value.
*/
function remainder(a, b) {
    return a % b;
    
}
console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));

/*function remainder2(a,b){
    if (a/b !== 0 ){
        return a;
    }else {
        return 0;
    }
}
console.log(remainder2(1,3));
console.log(remainder2(3,4));
console.log(remainder2(-9,45));
console.log(remainder2(5,5));*/