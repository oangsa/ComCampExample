let comcamp: string = "ComCamp#36";
let array: number[] = [1, 2, 3, 4, 5];

console.log("--Includes--\n");

console.log("Includes(Com): ", comcamp.includes("Com")); // true
console.log("Includes(com): ", comcamp.includes("com")); // false
console.log("Includes(1): ", array.includes(1)); // true
console.log("Includes(6): ", array.includes(6)); // false
