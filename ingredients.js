const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}
// // Write a for loop that prints out the contents of ingredients:
for (y=0; y < ingredients.length; y++){
  console.log(ingredients[y])
}
// // // Write any loop (while or for) that prints out the contents of ingredients backwards:
let ingRev = ingredients.reverse();
for (x=0; x < ingRev.length; x++){
  console.log(ingRev[x])
}
