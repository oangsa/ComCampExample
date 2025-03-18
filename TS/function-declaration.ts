// Normal Way

// Function Declaration
function greet() {
    console.log("Hello, World!");
}

async function greetAsync(): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello, World! (Async)");
            resolve();
        }, 2000);
    });
}

greetAsync();
greet();



// Function Expression

let greet2 = function() {
    console.log("Hello, World! (Expression)");
}

let greet2Async = async function(): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello, World! (Expression, Async)");
            resolve();
        }, 2000);
    });
}

greet2Async();
greet2();


// Arrow Function

let greet3 = () => {
    console.log("Hello, World! (Arrow)");
}

let greet3Async = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello, World! (Arrow, Async)");
            resolve(void 0);
        }, 2000);
    });
}

greet3Async();
greet3();
