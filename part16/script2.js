// const prom = fetch("https://jsonplaceholder.typicode.com/posts"); //or .then
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((rs)=>{
        // response is not readable, convert it to json format

        if(rs.ok){
            rs.json().then((frs) =>{
                console.log(frs)
            }).catch((err) => {
                console.log(err);
            }); // rs.json() returns a promise
            // or use this.json() will also return a promise
        }
        console.log(rs);
    }).catch((err) => {
        console.log(err);
    });

// prom.then().catch();

