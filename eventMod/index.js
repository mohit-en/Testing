const EventEmitter = require('events');

const event = new EventEmitter();

event.on("SayMyName", (sc, mg) => {
    console.log(`My name is ... status code is ${sc} and message is ${mg}`);
});

event.emit("SayMyName", 200, 'ok');