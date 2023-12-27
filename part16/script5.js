
async function getData() {
    const prom1 = fetch("https://jsonplaceholder.typicode.com/posts");
    const prom2 = fetch("https://swapi.dev/api/planets");

    const allPromRs = await Promise.all([prom1, prom2]);

    console.log(allPromRs);
}

getData();