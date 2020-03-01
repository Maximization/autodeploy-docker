const http = require('http');

const server = http.createServer((req, res) => {
  return res.end('hello world v2');
});

module.exports = server;
