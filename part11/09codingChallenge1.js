const julieDogAgeSurvey = [3, 5, 2, 12, 7];
const kateDogAgeSurvey = [4, 1, 15, 8, 13];
const julieDogAgeSurvey2 = [9, 16, 6, 8, 3];
const kateDogAgeSurvey2 = [10, 5, 6, 1, 4];

const checkDogs= (julieDogAgeSurvey,kateDogAgeSurvey) => {
    let julieDogAgeSurveyDUPLICATE = [...julieDogAgeSurvey];
    // const julieDogAgeSurveyDUPLICATE = julieDogAgeSurvey.slice();
    julieDogAgeSurveyDUPLICATE.shift();
    julieDogAgeSurveyDUPLICATE.splice(-2);
    const finalDogs = [...julieDogAgeSurveyDUPLICATE, ...kateDogAgeSurvey];
    console.log(finalDogs);
    finalDogs.forEach((element, index, arr) => {
        element >= 3 && console.log(`Dog number ${index + 1} is an adult, and is ${element} years old.`)
        element < 3 && console.log(`Dog number ${index+1} is still a puppy.`)
    });

}

checkDogs(julieDogAgeSurvey, kateDogAgeSurvey);
checkDogs(julieDogAgeSurvey2, kateDogAgeSurvey2);