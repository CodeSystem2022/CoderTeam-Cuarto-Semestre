function greet(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hello, ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function talk(callbackTalk) {
    setTimeout(function() {
        console.log('Blah blah blah...');
        callbackTalk();
    }, 1000);
}

function farewell(nombre, anotherCallback) {
    setTimeout(function() {
        console.log('Goodbye, ' + nombre);
        anotherCallback();
    }, 1000);
}

console.log('Starting the process...');
greet('Eduardo')
    .then((nombre) => {
        console.log('Process completed...');
    });
