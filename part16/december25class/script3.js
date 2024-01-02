fetch("https://swapi.dev/api/planets")
    .then((rs)=>{
        // response is not readable, convert it to json format

        if(rs.ok){
            // rs.json().then((frs) =>{
            //     console.log(frs)
            // }).catch((err) => {
            //     console.log(err);
            // }); // rs.json() returns a promise
            // // or use this.json() will also return a promise
            return rs.json();
        
        }
        console.log(rs);
    }).then((frs) =>{
        console.log(frs);
    }).catch((err) => {
        console.log(err);
    });