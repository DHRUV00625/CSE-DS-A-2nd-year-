const EventEmitter = require('events');

// Create an instance of EventEmitter
const studentMonitor = new EventEmitter();

// 1. Login Event
studentMonitor.on('login', (studentName) => {
    if (studentName) {
        console.log(`${studentName}: student logged successfully`);
    } else {
        console.log('student logged successfully');
    }
});

// 2. Assignment Event
studentMonitor.on('assignment', (assignmentName) => {
    if (assignmentName) {
        console.log(`assignment submitted: ${assignmentName}`);
    } else {
        console.log('assignment submitted');
    }
});

// 3. Logout Event
studentMonitor.on('logout', (studentName) => {
    if (studentName) {
        console.log(`${studentName}: student logged out`);
    } else {
        console.log('student logged out');
    }
});

// 4. Exit Event
studentMonitor.on('exit', () => {
    console.log('exiting application');
});

// --- Triggering the Events (Demonstration) ---
console.log('--- Monitoring Student Activities ---');
studentMonitor.emit('login');
studentMonitor.emit('assignment');
studentMonitor.emit('logout');
studentMonitor.emit('exit');
