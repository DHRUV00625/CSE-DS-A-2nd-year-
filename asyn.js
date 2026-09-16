const fs = require('fs');

// 1. Create and write to the file
fs.writeFile('sample.txt', 'Welcome to Full Stack Development', (err) => {
  if (err) {
    console.log('Error creating file:', err);
    return;
  }
  console.log('1. File created successfully!');

  // 2. Read the initial content
  fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
      console.log('Error reading file:', err);
      return;
    }
    console.log('\n2. Initial file content:\n' + data);

    // 3. Append content to the file
    fs.appendFile('sample.txt', '\nSemester: 3', (err) => {
      if (err) {
        console.log('Error updating file:', err);
        return;
      }
      console.log('\n3. File updated successfully!');

      // 4. Read the updated content
      fs.readFile('sample.txt', 'utf8', (err, updatedData) => {
        if (err) {
          console.log('Error reading file:', err);
          return;
        }
        console.log('\n4. Updated file content:\n' + updatedData);
      });
    });
  });
});