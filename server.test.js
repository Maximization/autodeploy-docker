const http = require('http');
const assert = require('assert').strict;
const server = require('./server');

const PORT = 8888;
server.listen(PORT);

http
  .get(`http://localhost:${PORT}`, (res) => {
    assert.equal(res.statusCode, 200);

    let data = '';
    res.on('data', (chunk) => (data += chunk));

    res.on('end', () => {
      assert.equal(data, 'hello world v2');
      server.close();
    });
  })
  .on('error', (error) => {
    assert.fail(error);
    server.close();
  });
