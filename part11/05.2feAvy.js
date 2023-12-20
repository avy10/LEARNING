const julieDogAgeSurvey = [3, 5, 2, 12, 7];
julieDogAgeSurvey.forEach((element, index, array) => {
    element++;
});
console.log(julieDogAgeSurvey);
// we are unable to ensure that elements in the array got increased. 
// we can defintely rewrite our code to make it work
julieDogAgeSurvey.forEach((element, index, array) => {
    array[index]++;
});
console.log(julieDogAgeSurvey);
// and if we want to get the result in a new array, we need to do this:
const arr = [];
julieDogAgeSurvey.forEach((element, index, array) => {
    arr[index] = ++element;
});
console.log(arr);