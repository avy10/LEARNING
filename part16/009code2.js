const getCountryData = function(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function(response){
        console.log(response);

        const newPromiseByJSONFunction = response.json();
        return newPromiseByJSONFunction;
    }).then(function(data){
        console.log(data)
    })
}

getCountryData("portugal")

// go to 009code3.js and paste that code in the script.js 
// then go to 009code4.js and paste that code in the script.js 
// the code in 009code4.js is similar to 007code1.js WITH DIFFERENCE BEING, we are using fetch in 009code4...
// ...as compared to XMLHTTPRequest() in 007code1.js
// in XMLHTTPRequest() we had to listen to the load event, once the data was loaded we executed callback function
// Promises helped us simplify that because we do not have to listen to "data load event". 
// we simply put the entire thing in async by use of Promises, and so far as we saw a fulfilled promise results
// in automatically calling for the callback function