const requestOne = new XMLHttpRequest();
requestOne.open("GET", "https://restcountries.com/v3.1/name/India");
requestOne.send();

requestOne.addEventListener("load", function(){
    const [dataONE, dataTWO] = JSON.parse(this.responseText); //the response has two objects in the array, dataONE for some british indian ocean territory
    // dataTWO for Republic of India
    console.log(dataTWO);
    
    // grab the comment out code from div class="countries"
    // then read the API data we received and fill in the html code

    //destructuring the languages of India
    let {eng, hin, tam} = dataTWO.languages;
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