
/**
 * Problem
 * 
1. Store your name in a variable
2. Store your birth year in a variable.
3. Store a future year in a variable.
4. Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.
 */

// Store your name in a variable
let name = "Folau"

// Store your birth year in a variable
const birthYear = 1986

// Store a future year in a variable.
const futureYear = 2022

// Calculate your 2 possible ages for that year based on the stored values.

// your age before turning to your new age
const currentAge = (futureYear - birthYear) - 1;

// your new age
const newAge = (futureYear - birthYear);

console.log("I will be either "+currentAge+" or "+newAge+" in "+futureYear)

/**
 * use your own birth date for testing.
 */