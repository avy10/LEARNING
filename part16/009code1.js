const request = fetch("https://restcountries.com/rest/v3.1/name/portugal")
console.log(request)
// we get a promise
// in the beginning this promise is pending because the async task of getting the data is still running in the background
// at a certain point the promise will then be settled either in a fulfilled state or in a rejected state.
// for a fulfilled promise, we get a value to work with
// WE handle the fulfill state using the then method
// then method is available on all promises in JS
// Now into the then methods. We need to pass a callback function that we want to be executed as soon as the promise is actually fulfilled.
// the callback function will actually receive one argument once it is called by JS. THAT ARGUMENT IS THE RESULTING VALUE OF THE FULFILLED PROMISE
// i.e. 
fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response){
    console.log(response);

})

// now that we have handled a fulfilled promise, let us actually do something with the response here.
// IMPORTANT : typeof that response is actually => Response

// in the console we can see that it contains headers, status and response Body. 
// response body contains the data that was sent by the server of the API call 
// the body is a ReadableStream which is why it cannot be used just yet
// in order to be able to actually read this data from the response body, we need to call the JSON method in the response of the fetch method
// JSON is available on all responses of the fetch method
fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response){
    console.log(response);

    // 
    response.json();
})

// the JSON function is also an ASYNC Function. JSON function also returns a new promise.
// BUT in the above piece of code we are not storing or using the promise returned by json().
// let us store the Promise returnd by json() in a variable and then return it
fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response){
    console.log(response);

    // 
    const newPromiseByJSONFunction = response.json();
    return newPromiseByJSONFunction;
})
// because the JSON function returns another promise, we gotta use(consume) that promise to get meaningful data
// in the below code the variable data contains an array which has object of country portugal that we receive from API
// and remember, when we have a fulfilled promise, we use then method on it

fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function(response){
        console.log(response);

        const newPromiseByJSONFunction = response.json();
        return newPromiseByJSONFunction;
    }).then(function(data){
        console.log(data)
    })
    //in the below codes we are manually using the name of country
    // in 009code2.js we will send the name of country as an argument

fetch(`https://restcountries.com/v3.1/name/portugal`)
    .then(function(response){
        console.log("RESPONZE",response);

        const newPromiseByJSONFunction = response.json();
        return newPromiseByJSONFunction;
    }).then(function(data){
        console.log("JSON DATA",data[0])
    })
fetch(`https://restcountries.com/v3.1/name/india`)
    .then(function(response){
        console.log("RESPONZE",response);

        const newPromiseByJSONFunction = response.json();
        return newPromiseByJSONFunction;
    }).then(function(data){
        console.log("JSON DATA",data[0])
		console.log("JSON DATA", data[1])
    })




