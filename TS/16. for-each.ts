let arrForForEach: string[] = ["C", "O", "M", "C", "A", "M", "P", "#", "3", "6"];

console.log("--forEach--\n");

let valueForEach: void = arrForForEach.forEach((value: string) => {
    // Callback function
    process.stdout.write(value);
});

console.log(valueForEach);
