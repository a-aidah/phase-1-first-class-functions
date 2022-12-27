function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    const named = function(){
        console.log("This is a named function returned")
    }
    return named;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("I am anonymous function")
    };
}