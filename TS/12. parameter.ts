// a and b are parameters of the function adder
function adder(a: number, b: number): number {
    return a + b;
}

let sum: number = adder(10, 20);
console.log(`Sum: ${sum}`); // 30





// Skipable parameters

function adder2(a: number, b: number, c?: number): number {
    if (c) {
        return a + b + c;
    }
    return a + b;
}

let sum2: number = adder2(10, 20);
console.log(`Sum: ${sum2}`); // 30

let sum3: number = adder2(10, 20, 30);
console.log(`Sum: ${sum3}`); // 60







// Default parameters

function adder3(a: number, b: number, c: number = 0): number {
    return a + b + c;
}

let sum4: number = adder3(10, 20);
console.log(`Sum: ${sum4}`); // 30
