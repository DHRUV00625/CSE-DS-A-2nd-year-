const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on('data', (value) => {
  console.log('Received data:', value);
});

emitter.on('data', (value) => {
  console.log('Double value:', value * 2);
});

emitter.on('done', () => {
  console.log('Process completed successfully.');
});

emitter.emit('data', 10);
emitter.emit('done');


function startProcess() {
  console.log('Starting process...');
  emitter.emit('data', 25);
  emitter.emit('done');
}

startProcess();
