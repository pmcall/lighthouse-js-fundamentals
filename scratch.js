// CHOOSE STATIONS ACTIVITY
// whiteList=[]
// const chooseStations = function (stations) {
//   for (i = 0; i <= stations.length - 1; i++){
//     if (stations[i][1] >= 20){
//       if (stations[i][2] === 'school' || stations[i][2] === 'community centre'){
//         whiteList.push(stations[i][0])
//       }
//     }
//   }
//   console.log(whiteList);
// }

// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
// ];

// chooseStations(stations);


// FINAL POSITION ACTIVITY

// function finalPosition(moves){
//   let position = [];
//   let xAxis = 0;
//   let yAxis = 0;
//   for (i = 0; i <= moves.length; i++){
//     if (moves[i] === 'north'){
//       yAxis += 1;
//     } else if (moves[i] === 'south'){
//       yAxis -= 1;
//     } else if (moves[i] === 'east'){
//       xAxis += 1;
//     } else if (moves[i] === 'west'){
//       xAxis -=1;
//     }
//   }
//   position[1] = yAxis;
//   position[0] = xAxis;
//   return position;
// }

// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
// console.log(finalPosition(moves))


// AGE CALCULATOR ACTIVITY

// function ageCalculator(name, yearOfBirth, currentYear){
//   let fullSentence = "";
//   fullSentence += name;
//   fullSentence += " is "
//   fullSentence += currentYear - yearOfBirth;
//   fullSentence += " years old."
//   return fullSentence
// }

// console.log(ageCalculator("Miranda", 1983, 2015));
// console.log(ageCalculator("Ferdinand", 1988, 2015));

// HOW MANY HUNDREDS ACTIVITY
// function howManyHundreds(num){
//   let numberOfHundreds = 0;
//   let output = 0;
//   if (num < 100){
//     output = 0;
//   } else {
//     let remainder = 0;
//     remainder = num % 100;
//     output = (num - remainder) / 100;
//   }
//   return output;
// }

// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);

// AREA CALCULATORS ACTIVITY

function calculateRectangleArea(length, width){
  if (length < 0 || width < 0){
    return undefined;
  } else {
    return length * width;
  }
}

function calculateTriangleArea(base, height){
  if (base < 0 || height < 0){
    return undefined
  } else {
    return (base * height) / 2;
  }
}

function calculateCircleArea(radius){
  if (radius < 0){
    return undefined
  } else {
    return Math.PI * (radius * radius);
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined


