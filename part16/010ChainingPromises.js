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
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0]);
            // the instructor is writing 
            // const neighbour = data[0].borders[0]; // in order to access the neighbour
            // but that sometimes do not work. for portugal, the neighbour at borders[0] is ESP, and 
            // https://restcountries.com/v3.1/name/ESP does returns data about spain but for some country code like BGD(for bangladesh, a neighbour of india) it does not work
            // hence I am using if else
        } );
};
const getCountryAndNeighbourData = function(country){
    getCountryData(country);
    if(country === "usa"){
        getCountryData("canada");
        getCountryData("mexico");
        
    }
    
    if(country === "portugal"){
        getCountryData("spain");
        
    }
    
    if(country === "germany"){
        getCountryData("austria");
        getCountryData("belgium");
        getCountryData("denmark");
        // there are more countries of germany but not using those

    }
}

getCountryAndNeighbourData("portugal");
getCountryAndNeighbourData("usa");
getCountryAndNeighbourData("germany");