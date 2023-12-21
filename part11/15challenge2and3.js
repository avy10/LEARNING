const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];
const calcAverageHumanAge = function(array){
    const dogHumanAge = array.map((element, index, array) => {
        if(element <= 2) {
            return element*2;
        } else {
            return 16 + element * 4;
        }
        
    });
    const filteredAge = dogHumanAge.filter((element, index, value) => element >= 18);

    return filteredAge;
}

const ans1= calcAverageHumanAge(data1);
const ans2= calcAverageHumanAge(data2);
console.log(ans1);
console.log(ans2);

const avg1 = ans1.reduce((sum, element, index, array) => sum += element, 0) / ans1.length;
console.log(avg1);
const avg2 = ans2.reduce((sum, element, index, array) => sum += element, 0) / ans2.length;
console.log(avg2);


const calcAvgAge = function(arr){
    const calcAvg = arr.map(element => element <= 2 ? element * 2 : 16 + element*4).filter(element => element >= 18).reduce((sum, element, index, array) => (sum += element/array.length), 0);
    return calcAvg;
}
console.log(calcAvgAge(data1));
console.log(calcAvgAge(data2));