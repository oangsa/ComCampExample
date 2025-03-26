// First approach to fetch data from an API using fetch and async/await

async function getData(): Promise<any> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}

getData().then((data: any) => console.log(data));


// Second approach to fetch data from an API using fetch and then

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data));
