// Let

let x: number = 10;

{
    let x: number = 20;
    let xInBlock: number = 20;
    console.log(x); // 20
    x = 30;
    console.log(x); // 30
}

console.log(x); // 10
// console.log(xInBlock); // Error



// Var

var y: number = 10;

{
    var y: number = 20;
    var yInBlock: number = 20;
    console.log(y); // 20
    y = 30;
    console.log(y); // 30
}

console.log(y); // 30
console.log(yInBlock); // 20


// Const

const z: number = 10;

{
    // const z: number = 20; // Error
    const zInBlock: number = 20;
    console.log(zInBlock); // 20
    console.log(z); // 10
}

// console.log(zInBlock); // Error
