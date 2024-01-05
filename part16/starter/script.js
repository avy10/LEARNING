'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////




// const requestOne = new XMLHttpRequest();
// requestOne.open("GET", "https://restcountries.com/v3.1/name/India");
// requestOne.send();

// requestOne.addEventListener("load", function(){
//     const [dataONE, dataTWO] = JSON.parse(this.responseText); //the response has two objects in the array, one for some british indian ocean territory
//     // other for Republic of India
//     console.log(dataTWO);
    
//     // grab the comment out code from div class="countries"
//     // then read the API data we received and fill in the html code

//     //destructuring the languages of India
//     let {eng, hin, tam} = dataTWO.languages;

//     // what if we do not have the keys ? check the function getCountryData we wrote after this one
//     const html = `
//         <article class="country">
//             <img class="country__img" src="${dataTWO.flags.png}" />
//             <div class="country__data">
//                 <h3 class="country__name">${dataTWO.name.official}</h3>
//                 <h4 class="country__region">${dataTWO.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+dataTWO.population/1000000000).toFixed(2)} Billion people</p>
//                 <p class="country__row"><span>🗣️</span>${`${eng}, ${hin}, ${tam}`}</p>
//                 <p class="country__row"><span>💰</span>${dataTWO.currencies.INR.name}  (${dataTWO.currencies.INR.symbol})</p>
//             </div>
//         </article>
//     `;
//     document.querySelector(".countries").style.opacity = 1;
//     document.querySelector(".countries").innerHTML = html;
//     for(let neybrs of dataTWO.borders){
//             const requestTwo = new XMLHttpRequest();
//             requestTwo.open("GET", `https://restcountries.com/v3.1/name/${neybrs}`);
//             requestTwo.send();
//             requestTwo.addEventListener("load", fn);
//         }
// });

// const fn = function(){
//         const [dataTWO] = JSON.parse(this.responseText); //the response has two objects in the array, one for some british indian ocean territory
//         // other for Republic of India
//         console.log(dataTWO);
        
//         // grab the comment out code from div class="countries"
//         // then read the API data we received and fill in the html code
//         let langKeys = Object.keys(dataTWO.languages);
//         let langs = [];
//         for(let lk of langKeys){
//             langs.push(dataTWO.languages[lk]);
//         }

//         let currencyKey = Object.keys(dataTWO.currencies);
//         let currencheese = [];
//         for(let ck of currencyKey){
//             // console.log(ck);
//             currencheese.push(dataTWO.currencies[ck].name);
//         }
//         let currencheeseSymbols = [];
//         for(let ck of currencyKey){
//             // console.log(ck);
//             currencheeseSymbols.push(dataTWO.currencies[ck].symbol);
//         }

//         const html = `
//             <article class="country neighbour">
//                 <img class="country__img" src="${dataTWO.flags.png}" />
//                 <div class="country__data">
//                     <h3 class="country__name">${dataTWO.name.official}</h3>
//                     <h4 class="country__region">${dataTWO.region}</h4>
//                     <p class="country__row"><span>👫</span>${(+dataTWO.population/1000000000).toFixed(2)} Billion people</p>
//                     <p class="country__row"><span>🗣️</span>${[...langs]}</p>
//                     <p class="country__row"><span>💰</span>${[...currencheese]}  (${[...currencheeseSymbols]})</p>
//                 </div>
//             </article>
//         `;
//         const newCountriesContainer = document.createElement("div");
//         newCountriesContainer.classList.add("countries");
//         document.querySelector(".container").appendChild(newCountriesContainer);
//         newCountriesContainer.style.opacity = 1;
//         newCountriesContainer.innerHTML = html;
//     }


// const getCountryData = function(country) {
//     const requestOne = new XMLHttpRequest();
//     requestOne.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//     requestOne.send();
//     requestOne.addEventListener("load", function(){
//         const [dataTWO] = JSON.parse(this.responseText); //the response has two objects in the array, one for some british indian ocean territory
//         // other for Republic of India
//         console.log(dataTWO);
        
//         // grab the comment out code from div class="countries"
//         // then read the API data we received and fill in the html code
//         let langKeys = Object.keys(dataTWO.languages);
//         let langs = [];
//         for(let lk of langKeys){
//             langs.push(dataTWO.languages[lk]);
//         }

//         let currencyKey = Object.keys(dataTWO.currencies);
//         let currencheese = [];
//         for(let ck of currencyKey){
//             // console.log(ck);
//             currencheese.push(dataTWO.currencies[ck].name);
//         }
//         let currencheeseSymbols = [];
//         for(let ck of currencyKey){
//             // console.log(ck);
//             currencheeseSymbols.push(dataTWO.currencies[ck].symbol);
//         }

//         const html = `
//             <article class="country">
//                 <img class="country__img" src="${dataTWO.flags.png}" />
//                 <div class="country__data">
//                     <h3 class="country__name">${dataTWO.name.official}</h3>
//                     <h4 class="country__region">${dataTWO.region}</h4>
//                     <p class="country__row"><span>👫</span>${(+dataTWO.population/1000000000).toFixed(2)} Billion people</p>
//                     <p class="country__row"><span>🗣️</span>${[...langs]}</p>
//                     <p class="country__row"><span>💰</span>${[...currencheese]}  (${[...currencheeseSymbols]})</p>
//                 </div>
//             </article>
//         `;
//         const newCountriesContainer = document.createElement("div");
//         newCountriesContainer.classList.add("countries");
//         document.querySelector(".container").appendChild(newCountriesContainer);
//         newCountriesContainer.style.opacity = 1;
//         newCountriesContainer.innerHTML = html;

//         for(let neybrs of dataTWO.borders){
//             const requestTwo = new XMLHttpRequest();
//             requestTwo.open("GET", `https://restcountries.com/v3.1/name/${neybrs}`);
//             requestTwo.send();
//             requestTwo.addEventListener("load", fn);
//         }
//     });
// }

// // getCountryData("portugal");
// // getCountryData("usa");
// // getCountryData("germany");


// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('22 seconds passed');
//     setTimeout(() => {
//       console.log('33 second passed');
//       setTimeout(() => {
//         console.log('44 second passed');
//       }, 2000);
//     }, 6000);
//   }, 10000);
// }, 15000);


/*  */

/* const getCountryAndNeighbourData = function(country){
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
    fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response){
        console.log(response);

        // 
        // response.json();
        const newPromiseByJSONFunction = response.json();
        return newPromiseByJSONFunction;
    }).then(function(data){
        console.log(data);
        renderCountry(data[0]);
    })
};

getCountryAndNeighbourData("portugal");
getCountryAndNeighbourData("usa");
getCountryAndNeighbourData("germany"); */

/*  */
// 
/*  */
// let us call neighbour by using borders[0] anyway
// insert code of 010ChainingPromisesCODE2.js


/*  */

// we are gonna fix the "request 404" error that occured when we passed a name of non-exitent country
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
    // newCountriesContainer.classList.add("countries");
    document.querySelector(".container").appendChild(newCountriesContainer);
    newCountriesContainer.innerHTML = html;
    
}
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => {
            console.log(response);
            return response.json();
        })
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
        })
        .then(response => typeof response === "number" ? response : response.json())
        .then(data => {
            console.log("DATA INSIDER", data)
            if(typeof data === "number"){
                alert(data);
            } else {
                renderCountry(data[0]);
            }
        })
        .catch(err => {
            console.error(`${err} 💥💥💥`);
            renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
        })
        .finally(() =>{
            countriesContainer.style.opacity = 1;

        })

};

btn.addEventListener("click", function(){
    getCountryData("bgd");
    // getCountryData("usa");
    // getCountryData("germany");
})


