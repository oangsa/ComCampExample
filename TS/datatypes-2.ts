// Array

console.log("--Array--\n");

let numberList: number[] = [1, 2, 3, 4, 5];
// let numberList: Array<number> = [1, 2, 3, 4, 5];

let stringList: string[] = ["Hello", "World"];
// let stringList: Array<string> = ["Hello", "World"];

// Any
let anyList: any[] = [1, "Hello", true, 100n]; // Normal JS array

console.log(numberList);
console.log(stringList);
console.log(anyList);



// Object

console.log("\n--Object--\n");

let obj: object = {
    name: "ComCamp",
    times: 36,
    isGoing: true,

    // Method
    greet: function() {
        console.log("Hello, World!");
    }
}

console.log(obj.name);
