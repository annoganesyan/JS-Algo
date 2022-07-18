 /*
Write a function that returns true if both numbers are:
Smaller than 0, OR ...
Greater than 0, OR ...
Exactly 0
Otherwise, return false.
*/
function both(a,b){
    if (a<0 && b<0){
        return true;
    }else if (a>0 && b>0){
        return true;
    }else if (a==0 && b==0){
        return true;
    } else {
        return false;
    }
}

console.log(both(0,2));
console.log(both(6, 2));
console.log(both(-6, -9));
console.log(both(6, -2));
console.log(both(0, 0));