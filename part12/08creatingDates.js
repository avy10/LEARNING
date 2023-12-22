// there are 4 ways to create date in JS and all of them use the new date constructor function 

// get the current time
const now = new Date();
console.log(now);

// parse the date from a date string
const newDate = new Date("Dec 23 2023 04:02:13");
const newDate2 = new Date("Sat Dec 23 2023 04:02:13");
const newDate3 = new Date("Sat Dec 23 2023 04:02:13");
const newDate4 = new Date("Sat Dec 23 2023 04:02:13 GMT+0530 (India Standard Time)");
console.log(newDate)
console.log(newDate2)
console.log(newDate3)
console.log(newDate4)

console.log(new Date("December 25, 2025"));
// since we did not provide time, JS set 00:00:00 as default time

// parsing the date from a date string can quickly become unrealiable as different user has different style of writing date
// so it is only safe when we a date string that has previously been created by JS itself


const movementsDates = [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ];

console.log(movementsDates[0]);