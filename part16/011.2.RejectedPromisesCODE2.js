
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

const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json(), error => console.log("ERROR IN REJECTED PROMISE", error))
        .then(data => {
            renderCountry(data[0]);
            let neighbour;
            try {
                neighbour = data[0].borders[0];
            } catch (error) {
                return 45;
            }
            
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

btn.addEventListener("click", function(){
    getCountryData("portugal");
    getCountryData("usa");
    getCountryData("germany");
})

// we managed to catch the error in first then of fetch but now we gotta catch the error that might occur in second then of fetch
// because what if the then of first fetch resolved successfully, but we got rejection in then of second fetch
// now the problem is we gotta do the error handling for all the failed promises of fetch API
// but there is a better way to handle errors
// back to one note 