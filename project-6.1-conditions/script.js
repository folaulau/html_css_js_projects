/**
 * Problem
1. Write a function named greaterNum that:
2. takes 2 arguments, both numbers.
3. returns whichever number is the greater (higher) number.
4. Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
 */

function greaterNum(number1, number2){
    if(number1 > number2){
        return number1
    }else{
        return number2
    }
}

let num1 = 23
let num2 = 34

let answer = greaterNum(num1,num2);

let message = "The greater number of "+num1+" and "+num2+" is "+answer+"."

console.log(message)

num1 = 4
num2 = 4

answer = greaterNum(num1,num2);

message = "The greater number of "+num1+" and "+num2+" is "+answer+"."

console.log(message)

num1 = 10
num2 = 3

answer = greaterNum(num1,num2);

message = "The greater number of "+num1+" and "+num2+" is "+answer+"."

console.log(message)