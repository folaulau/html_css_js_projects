/**
 * Problem
1. Write a function named assignGrade that:
2. takes 1 argument, a number score.
3. returns a grade for the score, either "A", "B", "C", "D", or "F".
4. Call that function for a few different scores and log the result to make sure it works.
*/

function assignGrade(score){
    let grade = ""
    if(score>=90){
        grade = "A"
    }else if(score<90 && score>=80){
        grade = "B"
    }else if(score<80 && score>=70){
        grade = "C"
    }else if(score<70 && score>=60){
        grade = "D"
    }else{
        grade = "F"
    }
    return grade
}

let score = 70

let grade = assignGrade(score);

let message = "Score: "+score+", Grade: "+grade

console.log(message)

score = 80

grade = assignGrade(score);

message = "Score: "+score+", Grade: "+grade

console.log(message)

score = 60

grade = assignGrade(score);

message = "Score: "+score+", Grade: "+grade

console.log(message)

score = 80

grade = assignGrade(score);

message = "Score: "+score+", Grade: "+grade

console.log(message)