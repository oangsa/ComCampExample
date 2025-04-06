// Normal function invocation

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

// Invoking the function
greetAsync();
greet();



// Method invocation

let greetObject: {greet: () => void} = {
    greet: function() {
        console.log("Hello, World! (Method)");
    }
}

greetObject.greet();
