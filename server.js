const http = require('http');

const server = http.createServer((req, res) => {
  return res.end('hello world');
});

module.exports = server;
