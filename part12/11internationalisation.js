// internationalisation is formatting date, time, currency etc on the basis of region of the user accessing the website
// internationalisation API => allows us to format numbers and strings according to different languages

// the html element we are targetting
//   As of <span class="date">05/03/2037</span>

const currentDate = new Date();
// new Intl.DateTimeFormat("en-US") => this creates a formatter for us. and now we are gonna pass a date value inside format function
// labelDate.textContent = new Intl.DateTimeFormat("en-US").format(currentDate) //first argument: locale string => locale is usually the language-country
// labelDate.textContent = new Intl.DateTimeFormat("en-IN").format(currentDate) 
// labelDate.textContent = new Intl.DateTimeFormat("ar-SY").format(currentDate) 
labelDate.textContent = new Intl.DateTimeFormat("ar-SY").format(currentDate);

// ISO language code table => lingos.net

// we have formatted date according to locale, what about time.
// for time, we pass an "options object" as a second argument

const options = {
	hour : "numeric",
	minute : "numeric",
}
// labelDate.textContent = new Intl.DateTimeFormat("en-US", options).format(currentDate); 
// the aboce code will make our date disappear because in the options object only time related properties are present.
// the options object has both time and date related properties, now adding date related properties => weekday, year, month, day
const optionsWithDate = {
	hour : "numeric",
	minute : "numeric",
	day : "numeric",
	month : "long",
	year : "numeric",
	weekday : "long",
};
// month : "numeric" => date in numbers format 1-12, month : "long" => full eng name of the month, "2-digit" => 01-12 
// year : "numeric" => 2020, "2-digit" => 20, 21, 22, 23
// weekday : "long" => full name of the weekday
// labelDate.textContent = new Intl.DateTimeFormat("en-US", optionsWithDate).format(currentDate); 
labelDate.textContent = new Intl.DateTimeFormat("pt-PT", optionsWithDate).format(currentDate); 


// it would be better to get the locale from user's browser instead of putting in the value manually

const locale = navigator.language;
labelDate.textContent = new Intl.DateTimeFormat(locale, optionsWithDate).format(currentDate); 

// for the bankist app, we are gonna set the locale based on locale set in the respective accounts object
labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, optionsWithDate).format(currentDate); 
// let us now get rid of language specific name of months and days by converting everything to numeric

const optionsWithDateNumeric = {
	hour : "numeric",
	minute : "numeric",
	day : "numeric",
	month : "numeric",
	year : "numeric",
	// weekday : "numeric",
	// weekday can't be numeric
};
labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, optionsWithDateNumeric).format(currentDate); 

