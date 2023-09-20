
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if (name === undefined) {
        return "Hello, World!";
    } else if (typeof name === "boolean") {
        return "Hello, World!";
    } else {
        return `Hello, ${name}!`;
    }
}

function isFive(input) {
    if (input === 5) {
        return true;
    } else if( input === "5") {
        return true;
    } else {
        return typeof input === "boolean";
    }
}