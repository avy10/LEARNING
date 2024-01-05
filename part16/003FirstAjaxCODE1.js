// there are multiple ways of doing AJAX calls
// we start with the XML data format => XML HTTP Request function (XHR)

const requestOne = new XMLHttpRequest(); // call the function and store the result in a new variable
// ajax calls used to be handled with events and callback functions
// in modern JS we use async JS to make ajax calls using a feature called Promises

// we have the XHR function, now we need the URL to which we will make the AJAX call
// requestOne.open("GET", "") //arguments : type of request, url in string format
// http request : GET,

// the API we gonna use for learning is REST Countries https://github.com/public-apis/public-apis https://restcountries.com/
// this API does not requires no authentication. It uses HTTPS and CORS
// any API that we wanna use should have CORS set to YES or Unknown 
// CORS = cross origin resource sharing, without CORS we cannot access a 3rd party API from our own code

// open the url https://restcountries.com/
// look for API Endpoints => Endpoint is another name for the URL that we are going to make HTTP Request
// for example:
    // https://restcountries.com/v3.1/all => get a list of the countries from this API
// for now we are interested in specific countries
    // https://restcountries.com/v3.1/name/{name}

requestOne.open("GET", "https://restcountries.com/v3.1/name/portugal"); // we open the request, now we need to send it
requestOne.send(); //this will send off the request to the URL. the send request will fetch the data in the background
// requestOne.send() is async JS

// the API Endpoint will transmit data to us. we are going to add an "load" event-listener which will get triggered when the transmitted data is 
// received by our page. as soon as data is received the callback function is executed
requestOne.addEventListener("load", function(){
    console.log(this.responseText); //responseText returns a response received from HTTP request as a text i.e. string
    // we can only get the received data as a string only after the data has loaded on our page. 
    // if we wrote console.log(requestOne.responseText) below the line requestOne.send() we will get nothing
    console.log((typeof this.responseText));
    // result of AJAX CALL
    /* 
    // for India:
    [{"name":{"common":"Portugal","official":"Portuguese Republic","nativeName":{"por":{"official":"República português","common":"Portugal"}}},"tld":[".pt"],"cca2":"PT","ccn3":"620","cca3":"PRT","cioc":"POR","independent":true,"status":"officially-assigned","unMember":true,"currencies":{"EUR":{"name":"Euro","symbol":"€"}},"idd":{"root":"+3","suffixes":["51"]},"capital":["Lisbon"],"altSpellings":["PT","Portuguesa","Portuguese Republic","República Portuguesa"],"region":"Europe","subregion":"Southern Europe","languages":{"por":"Portuguese"},"translations":{"ara":{"official":"الجمهورية البرتغالية","common":"البرتغال"},"bre":{"official":"Republik Portugalat","common":"Portugal"},"ces":{"official":"Portugalská republika","common":"Portugalsko"},"cym":{"official":"Portuguese Republic","common":"Portugal"},"deu":{"official":"Portugiesische Republik","common":"Portugal"},"est":{"official":"Portugali Vabariik","common":"Portugal"},"fin":{"official":"Portugalin tasavalta","common":"Portugali"},"fra":{"official":"République portugaise","common":"Portugal"},"hrv":{"official":"Portugalska Republika","common":"Portugal"},"hun":{"official":"Portugál Köztársaság","common":"Portugália"},"ita":{"official":"Repubblica portoghese","common":"Portogallo"},"jpn":{"official":"ポルトガル共和国","common":"ポルトガル"},"kor":{"official":"포르투갈 공화국","common":"포르투갈"},"nld":{"official":"Portugese Republiek","common":"Portugal"},"per":{"official":"جمهوری پرتغال","common":"پرتغال"},"pol":{"official":"Republika Portugalska","common":"Portugalia"},"por":{"official":"República português","common":"Portugal"},"rus":{"official":"Португальская Республика","common":"Португалия"},"slk":{"official":"Portugalská republika","common":"Portugalsko"},"spa":{"official":"República Portuguesa","common":"Portugal"},"srp":{"official":"Португалска Република","common":"Португал"},"swe":{"official":"Republiken Portugal","common":"Portugal"},"tur":{"official":"Portekiz Cumhuriyeti","common":"Portekiz"},"urd":{"official":"جمہوریہ پرتگال","common":"پرتگال"},"zho":{"official":"葡萄牙共和国","common":"葡萄牙"}},"latlng":[39.5,-8.0],"landlocked":false,"borders":["ESP"],"area":92090.0,"demonyms":{"eng":{"f":"Portuguese","m":"Portuguese"},"fra":{"f":"Portugaise","m":"Portugais"}},"flag":"\uD83C\uDDF5\uD83C\uDDF9","maps":{"googleMaps":"https://goo.gl/maps/BaTBSyc4GWMmbAKB8","openStreetMaps":"https://www.openstreetmap.org/relation/295480"},"population":10305564,"gini":{"2018":33.5},"fifa":"POR","car":{"signs":["P"],"side":"right"},"timezones":["UTC-01:00","UTC"],"continents":["Europe"],"flags":{"png":"https://flagcdn.com/w320/pt.png","svg":"https://flagcdn.com/pt.svg","alt":"The flag of Portugal is composed of two vertical bands of green and red in the ratio of 2:3, with the coat of arms of Portugal centered over the two-color boundary."},"coatOfArms":{"png":"https://mainfacts.com/media/images/coats_of_arms/pt.png","svg":"https://mainfacts.com/media/images/coats_of_arms/pt.svg"},"startOfWeek":"monday","capitalInfo":{"latlng":[38.72,-9.13]},"postalCode":{"format":"####-###","regex":"^(\\d{7})$"}}]
    // for Portugal:
    [{"name":{"common":"Portugal","official":"Portuguese Republic","nativeName":{"por":{"official":"República português","common":"Portugal"}}},"tld":[".pt"],"cca2":"PT","ccn3":"620","cca3":"PRT","cioc":"POR","independent":true,"status":"officially-assigned","unMember":true,"currencies":{"EUR":{"name":"Euro","symbol":"€"}},"idd":{"root":"+3","suffixes":["51"]},"capital":["Lisbon"],"altSpellings":["PT","Portuguesa","Portuguese Republic","República Portuguesa"],"region":"Europe","subregion":"Southern Europe","languages":{"por":"Portuguese"},"translations":{"ara":{"official":"الجمهورية البرتغالية","common":"البرتغال"},"bre":{"official":"Republik Portugalat","common":"Portugal"},"ces":{"official":"Portugalská republika","common":"Portugalsko"},"cym":{"official":"Portuguese Republic","common":"Portugal"},"deu":{"official":"Portugiesische Republik","common":"Portugal"},"est":{"official":"Portugali Vabariik","common":"Portugal"},"fin":{"official":"Portugalin tasavalta","common":"Portugali"},"fra":{"official":"République portugaise","common":"Portugal"},"hrv":{"official":"Portugalska Republika","common":"Portugal"},"hun":{"official":"Portugál Köztársaság","common":"Portugália"},"ita":{"official":"Repubblica portoghese","common":"Portogallo"},"jpn":{"official":"ポルトガル共和国","common":"ポルトガル"},"kor":{"official":"포르투갈 공화국","common":"포르투갈"},"nld":{"official":"Portugese Republiek","common":"Portugal"},"per":{"official":"جمهوری پرتغال","common":"پرتغال"},"pol":{"official":"Republika Portugalska","common":"Portugalia"},"por":{"official":"República português","common":"Portugal"},"rus":{"official":"Португальская Республика","common":"Португалия"},"slk":{"official":"Portugalská republika","common":"Portugalsko"},"spa":{"official":"República Portuguesa","common":"Portugal"},"srp":{"official":"Португалска Република","common":"Португал"},"swe":{"official":"Republiken Portugal","common":"Portugal"},"tur":{"official":"Portekiz Cumhuriyeti","common":"Portekiz"},"urd":{"official":"جمہوریہ پرتگال","common":"پرتگال"},"zho":{"official":"葡萄牙共和国","common":"葡萄牙"}},"latlng":[39.5,-8.0],"landlocked":false,"borders":["ESP"],"area":92090.0,"demonyms":{"eng":{"f":"Portuguese","m":"Portuguese"},"fra":{"f":"Portugaise","m":"Portugais"}},"flag":"\uD83C\uDDF5\uD83C\uDDF9","maps":{"googleMaps":"https://goo.gl/maps/BaTBSyc4GWMmbAKB8","openStreetMaps":"https://www.openstreetmap.org/relation/295480"},"population":10305564,"gini":{"2018":33.5},"fifa":"POR","car":{"signs":["P"],"side":"right"},"timezones":["UTC-01:00","UTC"],"continents":["Europe"],"flags":{"png":"https://flagcdn.com/w320/pt.png","svg":"https://flagcdn.com/pt.svg","alt":"The flag of Portugal is composed of two vertical bands of green and red in the ratio of 2:3, with the coat of arms of Portugal centered over the two-color boundary."},"coatOfArms":{"png":"https://mainfacts.com/media/images/coats_of_arms/pt.png","svg":"https://mainfacts.com/media/images/coats_of_arms/pt.svg"},"startOfWeek":"monday","capitalInfo":{"latlng":[38.72,-9.13]},"postalCode":{"format":"####-###","regex":"^(\\d{7})$"}}]
    */
    // the data we received in in a JSON format and not XML because modern APIs use JSON, we are using XML method and we still got JSON
    // now we gotta convert that text into a JS Object using JSON.parse
    const dataReceived = JSON.parse(this.responseText);
    console.log("data received in JSON",dataReceived);
    console.log(typeof dataReceived); //an array containing one object. to access object we will need to do dataReceived[0]
    // so we can destructure that array

    const [dataReceivedDESTRUCTURE] = JSON.parse(this.responseText);
    // now the object is out of the array
    console.log("taking data out of the array",dataReceivedDESTRUCTURE);
        /* 
    Object { name: {…}, tld: (1) […], cca2: "PT", ccn3: "620", cca3: "PRT", cioc: "POR", independent: true, status: "officially-assigned", unMember: true, currencies: {…}, … }
​
altSpellings: Array(4) [ "PT", "Portuguesa", "Portuguese Republic", … ]
​
area: 92090
​
borders: Array [ "ESP" ]
​
capital: Array [ "Lisbon" ]
​
capitalInfo: Object { latlng: (2) […] }
​
car: Object { signs: (1) […], side: "right" }
    */

});

// go to script.js and do the XHR on your own
