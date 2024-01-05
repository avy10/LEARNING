// when we put a name of country that does not exist in the API endpoint, we get a 404 error
// the problem with a 404 error is that, it still results in fulfillment of a promise, 
// there is not rejection which is why our catch method cannot catch the error
// how do we then catch the 404 error and tell the user that no country was found
