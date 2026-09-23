
console.log("Start");

setTimeout(() => {
    console.log("Timeout has been executed!");
}, 1000);

setImmediate(() => {
    console.log('Immediate has been executed!');
});

process.nextTick(() => {
    console.log(`NextTick has been executed!`);
});