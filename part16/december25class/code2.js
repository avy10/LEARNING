setTimeout(() => {
    console.log("Timer exhausted")
}, 2000);

function func(callback) {
    console.log("hello from func");
    callback();
}

func(function(){
    console.log("I am a callack function. I am also anonymous");
});
// the setTimeout function is run by JS main thread
// and the anonymous function inside the setTimeout will be called by the setTimeout() after 2
// rn the debugger set in vscode in node.js, so it is node's responsibility to run the anonymous function
// in the browser, the browser's JS engine will run the anonymous function

// hence the anonymous function inside the setTimeout is asynchronously executed i.e. executed in the background
// whereas the function func is executed synchronously by the JS main thread
