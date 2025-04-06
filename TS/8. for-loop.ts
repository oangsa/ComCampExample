// For loops

// loop through 0 to 4
console.log("For loop:");
for (let i = 0; i < 5; i++) {
    process.stdout.write(`${i} `);
}
console.log("\n");

let arr: number[] = [1, 2, 3, 4, 5];


// Traditional for loop
console.log("Loop through the array:");
for (let i = 0; i < arr.length; i++) {
    process.stdout.write(`${arr[i]} `);
}
console.log("\n");


// For-in loop
// loop through the index of the array
console.log("For-in loop:");
for (const index in arr) {
    process.stdout.write(`${index} `);
}
console.log("\n");


// For-of loop
// loop through the elements of the array
console.log("For-of loop:");
for (const number of arr) {
    process.stdout.write(`${number} `);
}
console.log("\n");
