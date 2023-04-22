// // CHOOSE STATIONS ACTIVITY
// // whiteList=[]
// // const chooseStations = function (stations) {
// //   for (i = 0; i <= stations.length - 1; i++){
// //     if (stations[i][1] >= 20){
// //       if (stations[i][2] === 'school' || stations[i][2] === 'community centre'){
// //         whiteList.push(stations[i][0])
// //       }
// //     }
// //   }
// //   console.log(whiteList);
// // }

// // const stations = [
// //   ['Big Bear Donair', 10, 'restaurant'],
// //   ['Bright Lights Elementary', 50, 'school'],
// //   ['Moose Mountain Community Centre', 45, 'community centre']
// // ];

// // chooseStations(stations);


// // FINAL POSITION ACTIVITY

// // function finalPosition(moves){
// //   let position = [];
// //   let xAxis = 0;
// //   let yAxis = 0;
// //   for (i = 0; i <= moves.length; i++){
// //     if (moves[i] === 'north'){
// //       yAxis += 1;
// //     } else if (moves[i] === 'south'){
// //       yAxis -= 1;
// //     } else if (moves[i] === 'east'){
// //       xAxis += 1;
// //     } else if (moves[i] === 'west'){
// //       xAxis -=1;
// //     }
// //   }
// //   position[1] = yAxis;
// //   position[0] = xAxis;
// //   return position;
// // }

// // const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
// // console.log(finalPosition(moves))


// // AGE CALCULATOR ACTIVITY

// // function ageCalculator(name, yearOfBirth, currentYear){
// //   let fullSentence = "";
// //   fullSentence += name;
// //   fullSentence += " is "
// //   fullSentence += currentYear - yearOfBirth;
// //   fullSentence += " years old."
// //   return fullSentence
// // }

// // console.log(ageCalculator("Miranda", 1983, 2015));
// // console.log(ageCalculator("Ferdinand", 1988, 2015));

// // HOW MANY HUNDREDS ACTIVITY
// // function howManyHundreds(num){
// //   let numberOfHundreds = 0;
// //   let output = 0;
// //   if (num < 100){
// //     output = 0;
// //   } else {
// //     let remainder = 0;
// //     remainder = num % 100;
// //     output = (num - remainder) / 100;
// //   }
// //   return output;
// // }

// // console.log(howManyHundreds(1000), "=?", 10);
// // console.log(howManyHundreds(894), "=?", 8);
// // console.log(howManyHundreds(520), "=?", 5);
// // console.log(howManyHundreds(99), "=?", 0);
// // console.log(howManyHundreds(0), "=?", 0);

// // AREA CALCULATORS ACTIVITY

// function calculateRectangleArea(length, width){
//   if (length < 0 || width < 0){
//     return undefined;
//   } else {
//     return length * width;
//   }
// }

// function calculateTriangleArea(base, height){
//   if (base < 0 || height < 0){
//     return undefined;
//   } else {
//     return (base * height) / 2;
//   }
// }

// function calculateCircleArea(radius){
//   if (radius < 0){
//     return undefined;
//   } else {
//     return Math.PI * (radius * radius);
//   }
// }

// console.log(calculateRectangleArea(10, 5));     // should print 50
// console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
// console.log(calculateRectangleArea(10, -5));    // should print undefined

// console.log(calculateTriangleArea(10, 5)); // should print 25
// console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
// console.log(calculateTriangleArea(10, -5)); // should print undefined

// console.log(calculateCircleArea(10)); // should print 314.159...
// console.log(calculateCircleArea(3.5)); // should print 38.484...
// console.log(calculateCircleArea(-1)); // should print undefined


// function range(start, end, step){
//   let rangeArray = [];
//   if (start === undefined || end === undefined || step === undefined){
//     return [];
//   } else if ( start > end) {
//     return [];
//   } else if (step <= 0){
//     return [];
//   } else {
//     let difference = end - start;
//     let stepNumber = difference / step;
//     let returnArray = [];
//     returnArray.push(start);
//     for (i = 0; i < stepNumber; i++){
//       let newStep = start+(step*(i+1));
//       returnArray.push(newStep);
//     } 
//     return returnArray;
//   }
// }
// console.log(range(-9, 3, 3));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));

// function lastIndexOf(array, value){
//   let lastIndex = -1;
//   for (let i = 0; i <= array.length; i++){
//     if (array[i] === value) {
//       lastIndex = i;
//     }
//   }
//   return lastIndex;
// }
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
// console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
// console.log(lastIndexOf([3], 3), "=?", 0);



// function concat(array1, array2){
//   return array1.concat(array2);
// }


// console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
// console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
// console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
// console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
// const trash = 'recycling'
// const bins = {
//   waste: 9,
//   recycling: 8,
//   compost: 3
// }


// const smartGarbage = function (trash, bins) {
//   if (trash === "waste"){
//     bins["waste"]++;
//   } else if (trash === "recycling"){
//     bins["recycling"]++;
//   } else if (trash === "compost"){
//     bins["compost"]++;
//   }
//   return bins;
// }

// smartGarbage(trash, bins)

// const carPassing = function (cars, speed) {
//   let nextCar = {
//     time: Date.now(),
//     speed: speed
//   }
//   cars.push(nextCar)
//   return cars
// // }




// let vegetables = [
//   {
//     submitter: 'Old Man Franklin',
//     redness: 10,
//     plumpness: 5
//   },
//   {
//     submitter: 'Sally Tomato-Grower',
//     redness: 2,
//     plumpness: 8
//   },
//   {
//     submitter: 'Hamid Hamidson',
//     redness: 4,
//     plumpness: 3
//   }
// ]
// let metric = "redness";




// judgeVegetable(vegetables, metric);




// const judgeVegetable = function (vegetables, metric) {
//   // Your code in here ...
//   let winner = "";
//   let scoring = 0;
//   for (let i = 0; i <= vegetables.length; i++){
//     if (vegetables[i][metric] > scoring){
//       score = vegetables[i][metric];
//       winner = vegetables[i][submitter];
//     }
//   }
//   console.log(winner)
//   return winner;
// };

// const judgeVegetable = function(vegetables, metric) {
//   let total = 0;
//   let winner = "";
//   for (const vegetable of vegetables) {
//     if (vegetable[metric] > total) {
//       total = vegetable[metric];
//       winner = vegetable.submitter;
//     }
//   }
//   return winner;
// }


// const beatles = ["john", "paul", "george", "ringo"];
// for (let i = 0; i < beatles.length; i += 2) {
//   console.log(beatles[i]);
// }



// const sumLargestNumbers = function(data) {
//   let result = 0
//   let orderedArray = data.sort();
//   let bigNumberOne = orderedArray[orderedArray.length-1];
//   let bigNumberTwo = orderedArray[orderedArray.length-2];
//   result = bigNumberOne+bigNumberTwo;
//   console.log(bigNumberOne);
//   console.log(bigNumberTwo);
//   console.log(result);
// };

// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// const conditionalSum = function(values, condition) {
//   //makes a new array of values which match the given condition
//   let conditionArray = []
//   if (condition === "even"){
//     for (i=0; i <= values.length; i++){
//       if (values[i] % 2 === 0){
//         conditionArray.push(values[i])
//       }
//     }
//   } else if (condition === "odd"){
//     for (i=0; i <= values.length; i++){
//       if (values[i] % 2 === 1){
//         conditionArray.push(values[i])
//       }
//     }
//   }
//   //add values of the conditionArray
//   let result = 0;
//   for (i=0; i <= conditionArray.length-1; i++){
//     result += conditionArray[i]
//   }
//   console.log(conditionArray)
//   return result;
// }

// console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// console.log(conditionalSum([], "odd"));


// const numberOfVowels = function(data) {
//   // Put your solution here
//   //creating a new array for each of the inputs to separate the letters
//   let stringToArray = Array.from(data);
//   let vowelCounter = 0;
//   //
//   for (i= 0; i <= stringToArray.length - 1; i++){
//     if (stringToArray[i] === "a" || stringToArray[i] === "e" || stringToArray[i] === "i" || stringToArray[i] === "o" || stringToArray[i] === "u"){
//       vowelCounter++;
//     }
//   }
//   return vowelCounter;
// };

// console.log(numberOfVowels("orange"));
// console.log(numberOfVowels("lighthouse labs"));
// console.log(numberOfVowels("aeiou"));



// const instructorWithLongestName = function(instructors) {
//   // Put your solution here
//   //Pull each name value and put into a new variable called currentName
//   let currentName = "";
//   let nameLength = 0;
//   let longestNameIndex = 0;
//     //Get length of current name and if it's longer than base, save the index
//   for (let i = 0; i <= instructors.length - 1; i++){
//     currentName = instructors[i]["name"];
//     if (currentName.length > nameLength){
//       nameLength = currentName.length;
//       longestNameIndex = i;
//     }
//   }
//     //return the index of the name which is longest
//   console.log("The instructor with the longest name in this cohort is "+instructors[longestNameIndex]["name"]+" who teaches the "+instructors[longestNameIndex]["course"]+" course")
//   return instructors[longestNameIndex]
// };


// console.log(instructorWithLongestName([
//   {name: "Samuel", course: "iOS"},
//   {name: "Jeremiah", course: "Web"},
//   {name: "Ophilia", course: "Web"},
//   {name: "Donald", course: "Web"}
// ]));
// console.log(instructorWithLongestName([
//   {name: "Matthew", course: "Web"},
//   {name: "David", course: "iOS"},
//   {name: "Domascus", course: "Web"}
// ]));


// const urlEncode = function(text) {
//   //Take in a string and convert to an array
//   let workingArray = text.split("");
//   let encodedOutput = "";
//   let forReplacement = [];
//   //Find index of any characters in a string which === " " and add to array forReplacement
//   for (i = 0; i <= text.length - 1; i++){
//     if (text[i] === " "){
//       forReplacement.push(i);
//     }
//   }
//   //Run through array and splice any spaces to replace " " with %20
//   for (i = 0; i <= forReplacement.length - 1; i++){
//     workingArray.splice(forReplacement[i], 1, "%20")
//   }
//   //Join the array items to form a string
//   encodedOutput = workingArray.join("");
//   return encodedOutput;
// };

// console.log(urlEncode("Lighthouse Labs"));
// console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));



const whereCanIPark = function (spots, vehicle) {
//An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.
  // Code here!
  let spaceCoordinates = []

  switch (vehicle) {
    
    case "regular":
      for (let y = 0; y < spots.length; y++){
        for (let x = 0; x < spots[y].length; x++){
          if (spots[y][x] === "R" ){            
            spaceCoordinates.splice(0, 1, x);
            spaceCoordinates.splice(1, 1, y);
            console.log(spaceCoordinates);
            return spaceCoordinates;
          } else {
            console.log(spaceCoordinates);
            return false;
          }
        }
      }

    case "small":
      for (let y = 0; y < spots.length; y++){
        for (let x = 0; x < spots[y].length; x++){
          if (spots[y][x] === "S" || spots[y][x] === "R" ){
            spaceCoordinates.splice(0, 1, x);
            spaceCoordinates.splice(1, 1, y);
            return spaceCoordinates;
          } else {
            return false;
          }
        }
      }

    case "motorcycle":
      for (let y = 0; y < spots.length; y++){
        for (let x = 0; x < spots[y].length; x++){
          if (spots[y][x] === "M" ||spots[y][x] === "S" || spots[y][x] === "R" ){
            spaceCoordinates.splice(0, 1, x);
            spaceCoordinates.splice(1, 1, y);
            return spaceCoordinates;
          }
        }
      }
  }
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 'R', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))


