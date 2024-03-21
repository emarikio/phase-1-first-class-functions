function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction(){
    return function named() {
        console.log('Named Function')
    }
}

function returnsAnAnonymousFunction(){''
    return function() {
        console.log('Anonymous Function')
    }
}