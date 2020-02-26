const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  return res.end('hello world');
});

server.listen(PORT, () => {
  console.log('Server started at', PORT);
});
