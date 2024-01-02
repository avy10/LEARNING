
function func(callback) {
    console.log("hello from func");
    callback();
}

func(function(){
    console.log("I am a callack function. I am also anonymous");
});
// when we call func() and passed a callback function in the arguments of func(), 
// then it is now the responsibility of func() to call the callback function thus, 
// the main thread is not responsible for calling the callback function. which means the main thread is free to do other things.
// 