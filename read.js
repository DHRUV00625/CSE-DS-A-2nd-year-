fs.readFile('section1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content is given by data: ' + data);
    }
});

// rename file
fs.rename('promises.txt', 'promises_renamed.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
    } else {
        console.log('File renamed successfully.');
    }
});