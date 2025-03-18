console.log("--Type Interface--\n");

interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "ComCamp",
    age: 36
}

console.log(person);

console.log("\n--Type Alias--\n");

type Point = {
    x: number;
    y: number;
}

let point: Point = {
    x: 10,
    y: 20
}

console.log(point);


// Extending interfaces

console.log("\n--Extending Interfaces--\n");

interface Animal {
    name: string;
    sound: string;
}

interface Dog extends Animal {
    breed: string;
}

let dog: Dog = {
    name: "Dog",
    sound: "Woof",
    breed: "Golden Retriever"
}

console.log(dog);


console.log("\n--& types alias--\n");

type Animal2 = {
    name: string;
    sound: string;
}

type Dog2 = Animal2 & {
    breed: string;
}

let dog2: Dog2 = {
    name: "Dog",
    sound: "Woof",
    breed: "Golden Retriever"
}


console.log(dog2);
