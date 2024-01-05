// let us call neighbour by using borders[0] anyway
const renderCountry = function(dataTWO, className = "") {
    let langKeys = Object.keys(dataTWO.languages);
    let langs = [];
    for(let lk of langKeys){
        langs.push(dataTWO.languages[lk]);
    }

    let currencyKey = Object.keys(dataTWO.currencies);
    let currencheese = [];
    for(let ck of currencyKey){
        // console.log(ck);
        currencheese.push(dataTWO.currencies[ck].name);
    }
    let currencheeseSymbols = [];
    for(let ck of currencyKey){
        // console.log(ck);
        currencheeseSymbols.push(dataTWO.currencies[ck].symbol);
    }
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${dataTWO.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${dataTWO.name.official}</h3>
                <h4 class="country__region">${dataTWO.region}</h4>
                <p class="country__row"><span>👫</span>${(+dataTWO.population/1000000000).toFixed(2)} Billion people</p>
                <p class="country__row"><span>🗣️</span>${[...langs]}</p>
                <p class="country__row"><span>💰</span>${[...currencheese]}  (${[...currencheeseSymbols]})</p>
            </div>
        </article>
    `;
    const newCountriesContainer = document.createElement("div");
    newCountriesContainer.classList.add("countries");
    document.querySelector(".container").appendChild(newCountriesContainer);
    newCountriesContainer.style.opacity = 1;
    newCountriesContainer.innerHTML = html;
    
}

/* const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];
            if(!neighbour) return 45;
            return fetch(`https://restcountries.com/v3.1/name/${neighbour}`);
        }).then(data => {
            if(typeof data === "number"){
                alert(data);
            } else {
                renderCountry(data[0]);
            }
        });
}; 
// this code has undefined error in it, also it is trying to use Promise returned by fetch API withour parsing it with json() which itself is another error
*/

const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0]);
            let neighbour;
            try {
                neighbour = data[0].borders[0];
            } catch (error) {
                return 45;
            }
            // for maldives, no neighbours exist. which is why neighbour = data[0].borders[0] would give you undefined error
            // we catch that undefined error and return 45
            
            console.log(country, "neighbour", neighbour)
            return fetch(`https://restcountries.com/v3.1/name/${neighbour}`);
        }).then(response => typeof response === "number" ? response : response.json())
            .then(data => {
                console.log("DATA INSIDER", data)
                if(typeof data === "number"){
                    alert(data);
                } else {
                    renderCountry(data[0]);
                }
        });
};

getCountryData("portugal");
getCountryData("usa");
getCountryData("germany");
getCountryData("maldives");
/*
for portugal usa germany, they have neighbours. so we make another api call for those neighbours
we return the promise
because we are expecting fulfilled promise cz neighbours for those countries do exist, we used another then below the return fetch(`https://restcountries.com/v3.1/name/${neighbour}`);
if the type of response is not a number, response.json() is called. As we know response.json will give us another promise
we use another then method and now we get to use the data the the API originally gave us

*/

// when getCountryData("maldives"); is called
/* 
it has no neighbours
    which is why neighbour = data[0].borders[0] would give you undefined error
    that undefined error would break code execution if left uncatched, so we put everything in try catch
    we catch that undefined error and return 45
now in the then below the return fetch(`https://restcountries.com/v3.1/name/${neighbour}`);
    we see that type of response is a number because the number is 45
    we return 45 as it is, because it not a response by API but a value we are returning manually/explicitly
        the then method ALWAYS RETURNS a promise even when there is no fulfilled promise to return
        however in case of maldives, we get an undefined error and return 45
        instead of returning a promise, the then method return this 45

*/