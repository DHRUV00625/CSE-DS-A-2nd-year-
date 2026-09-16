<<<<<<< HEAD
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);

  // Set status code and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('X-Powered-By', 'Node.js');

  // Send response body
  res.end('Hello World');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
=======
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);

  // Set status code and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('X-Powered-By', 'Node.js');

  // Send response body
  res.end('Hello World');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
>>>>>>> 67ddca8ddcc8791dd03c6e0b08179083f0b42b23
});