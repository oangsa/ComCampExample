// Function declaration with generic type
function getValue<T>(item: T): T {
    return item;
}

// Function Invocation with generic type
const value: string = getValue<string>("ComCamp#36");
