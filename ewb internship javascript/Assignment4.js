//Assignment 4: Loop Control Structures

//Task: Write a for loop to print a multiplication table up to 5. Use a while loop with a break statement to find the first number greater than 10 that is divisible by 6, and a do...while loop that skips numbers using continue.


console.log("-- Multiplication Table of 5 --");
for(let i=1;i<=5;i++){
    console.log(`5x${i}=${5*i}`);
}
console.log("\n-- First number > 10 divisible by 6 --");
let num=11;
while(true){
    if(num>10 && num%6===0){
        console.log("Found:",num);
        break;
    }
    num++;
}
let i=0;
do {
    i++;
    if(i===3){
        continue;
    }
} while (i<5);