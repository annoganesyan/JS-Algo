/*
Create a function that takes the number of wins, draws, and losses and calculates the number of points a football team has obtained so far.
wins get 3 points
draws get 1 point
losses get 0 points
*/

function footballPoints(wins,draws,losses){
    return wins * 3 + draws + losses * 0;
}
console.log(footballPoints(1, 2, 3));
console.log(footballPoints(5, 5, 5));
console.log(footballPoints(1, 0, 0));
console.log(footballPoints(0, 7, 0));
console.log(footballPoints(0, 0, 15));