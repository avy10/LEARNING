// at the end of 003FirstAjaxCODE3, we did 3 back to back function calls
// these calls were all async that means the callbacks for all 3 of the function ran together
// we can write our code in a way that gives us some control over which AJAX call runs first among a sequence of AJAX Calls
//  render the neighbouring country beside the main country call

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function(country) {
    const requestOne = new XMLHttpRequest();
    requestOne.open("GET", `https://restcountries.com/v3.1/name/${country}`);
    requestOne.send();
    requestOne.addEventListener("load", function(){
        const [dataTWO] = JSON.parse(this.responseText); //the response has two objects in the array, one for some british indian ocean territory
        // other for Republic of India
        console.log(dataTWO);
        
        // grab the comment out code from div class="countries"
        // then read the API data we received and fill in the html code
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
            <article class="country">
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
    });
}

const requestOne = new XMLHttpRequest();
requestOne.open("GET", "https://restcountries.com/v3.1/name/India");
requestOne.send();


requestOne.addEventListener("load", function(){
    const [dataONE, dataTWO] = JSON.parse(this.responseText); //the response has two objects in the array, one for some british indian ocean territory
    // other for Republic of India
    console.log(dataTWO);
    
    // grab the comment out code from div class="countries"
    // then read the API data we received and fill in the html code

    //destructuring the languages of India
    let {eng, hin, tam} = dataTWO.languages;

    // what if we do not have the keys ? check the function getCountryData we wrote after this one
    const html = `
        <article class="country">
            <img class="country__img" src="${dataTWO.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${dataTWO.name.official}</h3>
                <h4 class="country__region">${dataTWO.region}</h4>
                <p class="country__row"><span>👫</span>${(+dataTWO.population/1000000000).toFixed(2)} Billion people</p>
                <p class="country__row"><span>🗣️</span>${`${eng}, ${hin}, ${tam}`}</p>
                <p class="country__row"><span>💰</span>${dataTWO.currencies.INR.name}  (${dataTWO.currencies.INR.symbol})</p>
            </div>
        </article>
    `;
    document.querySelector(".countries").style.opacity = 1;
    document.querySelector(".countries").innerHTML = html;

    f/* or(let countries of dataTWO.borders){
        getCountryData(countries);
    } */
    // the above for loop wont work cz the country code inside borders sometimes work and sometimes do not
    // it works for pak, but not for bgd
    
});



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