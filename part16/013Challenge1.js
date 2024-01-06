
const renderCountry = function(dataTWO, className = "") {
    console.log("AM I WORKING")
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
    // newCountriesContainer.classList.add("countries");
    document.querySelector(".container").appendChild(newCountriesContainer);
    newCountriesContainer.innerHTML = html;
    
}
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};


// CODING CHALLENGE ONE
// https://geocode.xyz/52.508,13.381?geoit=json&auth=646679760777680487947x16600

const whereAmI = function(lat, long){
    const url = `https://geocode.xyz/${lat},${long}?geoit=json&auth=646679760777680487947x16600`;
    fetch(url)
        .then(response => {
            console.log(response);
            if(!response.ok || response.status == 403){
                throw new Error("Coordinates not found");
            }
            // the above if statement is useless because this particular API returns ok = true even for lat and long that are not possible 
            // so we gotta check the json object for clues for error
            return response.json();
        })
        .then(data => {
            // for lat and lang that are NOT FOUND by API, the data object will contain a key "matches". the value of "matches" key will be null
            // for lat and lang that are FOUND by API, the data object will NOT contain "matches" key.
            // we can use this to throw error messages
            if(data.hasOwnProperty("matches")){
                console.log("THE HASOWNPROPERTY IF")
                throw new Error("These cooordinates do not exist");
            }

            console.log(data);
            let city;
            let country;
            if(data.hasOwnProperty("standard")){
                city = data.standard.city;
                country = data.standard.countryname;
            } else {
                city = data.city;
                country = data.country;
            }

            console.log(`You are in ${city}, ${country}`)
            return fetch(`https://restcountries.com/v3.1/name/${country}`)
        })
        .then(response => {
            if(!response.ok){
                throw new Error("COUNTRY NOT FOUND");
            }
            return response.json();
        })
        .then(data => {
            console.log("DATA DATA DATA", data[0]);
            renderCountry(data[0];
        })
        .catch(error => {
            console.log("ERROR FOUND", error);
        })
        .finally(function(){
            countriesContainer.style.opacity = 1;

        })
}


btn.addEventListener("click", function(){
    // getCountryData("bgd");
    // getCountryData("maldives");
    whereAmI(9999999, 9999999); //for some reason geocode returns a country based on postal code "9999999".
                                // which is why we had to check for data.hasOwnProperty
                                // because when geocode returns a response based on postal code the name of city and country are stored inside a standard object

    whereAmI(999999, 999999); // no such country found. instead of giving us status = 404 and ok = false, it returns a response which contains a property called matches,
                            // and matches is set to null
                            // we can not get error 404 here like we did in restcountries API
    whereAmI(52.508, 13.381)
    whereAmI(19.037, 72.873)
    whereAmI(-33.933, 18.474)

    // getCountryData("usa");
    // getCountryData("germany");
})