//Assignment 5: Function Architecture and Scope

//Task: Define a standard function and an arrow function that accept parameters (e.g., length and width) with default values to calculate the area of a rectangle. Demonstrate function and block scope limits.


function rectangleArea(length=5,width=4) {
    return length*width;
}
console.log("Standard Function Area (Default 5x4):",rectangleArea());
const arrowArea=(length=5,width=4) => length*width;
console.log("Arrow Function Area (Custom 10x3):",arrowArea(10,3));
{
    let blockVar=10;
}
try {
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error:",error.toString());
}