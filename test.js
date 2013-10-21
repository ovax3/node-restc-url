var http = require('http');
var assert = require('assert');
var restc = require('restc');

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

var client = restc(
  {
    url: 'http://localhost:1337/hello'
  },
  require('./index').parser
);

server.listen(1337, '127.0.0.1', function () {
  console.log('Server running at http://127.0.0.1:1337');

  client.get('/hey', function (err, req, res, data) {
    if (err) throw err;
    console.log(data);
    assert.equal(req.options.hostname, 'localhost');
    assert.equal(req.path, '/hello/hey');
    assert.equal(data, 'Hello World');
    process.exit();
  });

});

