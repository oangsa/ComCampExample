let arrForMap: string[] = ["C", "O", "M", "C", "A", "M", "P", "#", "3", "6"];

console.log("--.Map--\n");

let mapValue: string[] = arrForMap.map((value: string, index: number) => {
    process.stdout.write(value);
    return value;
});


console.log(mapValue);
