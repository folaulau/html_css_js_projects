/**
 * Problem
1. Store your current age into a variable.
2. Store a maximum age into a variable.
3. Store an estimated amount per day (as a number).
4. Calculate how many you would eat total for the rest of your life.
5. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
 */

// Store your current age into a variable.
let age = 35

// Store a maximum age into a variable.
// age you think you live until
const maxAge = 85

// Store an estimated amount per day (as a number).
// it's not very clear here(my fault) what the estimated amount is. I am using number of meals(stole Ati's idea)
let numberOfMealsPerDay = 3

let numberOfDaysPerYear = 365

let numberOfYearsToLive = maxAge - age;

// get all number of meals you are going to have til you die
let totalNumberOfMeals = numberOfMealsPerDay * numberOfDaysPerYear * numberOfYearsToLive

console.log("You will need "+totalNumberOfMeals+" meals to last you until the ripe old age of "+maxAge)