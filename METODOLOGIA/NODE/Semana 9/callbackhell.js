function greet(nombre, myCallback) {
    setTimeout(function() {
        console.log('Hello, ' + nombre);
        myCallback(nombre);
    }, 1000);
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

function conversation(nombre, times, callback) {
    if (times > 0) {
        talk(function() {
            conversation(nombre, --times, callback);
        });
    } else {
        farewell(nombre, callback);
    }
}

// Proceso principal
console.log('Starting the process...');
greet('WildBlueTurtle', function(nombre) {
    conversation(nombre, 4, function() {
        console.log('Process completed');
    });
});
