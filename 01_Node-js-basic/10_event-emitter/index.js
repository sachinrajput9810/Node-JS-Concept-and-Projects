const eventEmitter = require('events');

const emitter = new eventEmitter.EventEmitter();
emitter.on('greet' , (name) => {
    console.log(`Hello, ${name}!`);
})

emitter.emit('greet', 'Alice');