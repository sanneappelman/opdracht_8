/*const bigNumber = function (number){
  if (number > 100){
      return true;
  } else {
      return false;
  }
};

console.log(bigNumber(150));
console.log(bigNumber(100));
console.log(bigNumber(9));
console.log(bigNumber(103)); */

/* kan 3 dingen zeggen:
"come in"
"it's too busy now, come back later"
"this is a club for adults"

deze arguments geven:
max number of people in the club
current number of people in the club
age of someone wanting to come in */

/*const bouncerBrenda = function (
    maxNumberOfPeople,
    currentNumberOfPeople,
    AgeOfSomeoneWantingToCome,
){
    if (AgeOfSomeoneWantingToCome <18) {
        return "this is a club for adults";
    } 

    if (currentNumberOfPeople >= maxNumberOfPeople) {
        return "It's too busy now come back later";
    } else {
        return "come in"
    }
};

//console.log (bouncerBrenda(2000, 0, 15));
//console.log (bouncerBrenda(100,120,20));
console.log (bouncerBrenda(300,150,19));
console.log (bouncerBrenda(100,101,19));*/



const calculateAverage = function (
    number1,
    number2,
    number3,
    number4,
    number5,
) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
};

console.log (calculateAverage(2,3,4,5,6));
console.log (calculateAverage(10,90,80,19,56))
