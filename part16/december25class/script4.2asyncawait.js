async function makeApiCall(apiPath) {
    const rs = await fetch(apiPath);
    console.log(rs);
}

makeApiCall("https://swapi.dev/api/planets");

console.log("avy")