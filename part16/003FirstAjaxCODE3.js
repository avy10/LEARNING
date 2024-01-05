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
});

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

        let neighbourKey = Object.keys(dataTWO.borders);
        let neighbourNames = [];
        for(let ney of neighbourKey){
            neighbourNames.push(dataTWO.borders[ney]);
        }
        console.log("ney ney", neighbourNames);

        const html = `
            <article class="country">
                <img class="country__img" src="${dataTWO.flags.png}" />
                <div class="country__data">
                    <h3 class="country__name">${dataTWO.name.official}</h3>
                    <h4 class="country__region">${dataTWO.region}</h4>
                    <p class="country__row"><span>👫</span>${(+dataTWO.population/1000000000).toFixed(2)} Billion people</p>
                    <p class="country__row"><span>🗣️</span>${[...langs]}</p>
                    <p class="country__row"><span>💰</span>${[...currencheese]}  (${[...currencheeseSymbols]})</p>
                    <p class="country__row"><span>🌐</span>${[...neighbourNames]}</p>
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

getCountryData("portugal");
getCountryData("usa");
getCountryData("germany");