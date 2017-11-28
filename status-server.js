var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
  // process HTTP request. Since we're writing just WebSockets
  // server we don't have to implement anything.
});
server.listen(1337, function() { });

// create the server
wsServer = new WebSocketServer({
  httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
  var connection = request.accept(null, request.origin);

  // This is the most important callback for us, we'll handle
  // all messages from users here.
  connection.on('message', function(message) {
    if (message.type === 'utf8') {
      // process WebSocket message
    }
  });

  connection.on('close', function(connection) {
    // close user connection
  });
});

/**
 * HTTP server
 */
var server = http.createServer(function(request, response) {
  console.log((new Date()) + ' HTTP server. URL'
      + request.url + ' requested.');

  if (request.url === '/status') {
    response.writeHead(200, {'Content-Type': 'application/json'});
    var responseObject = {
      currentClients: clients.length,
      totalHistory: history.length
    };
    response.end(JSON.stringify(responseObject));
  } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('Sorry, unknown url');
  }
});
server.listen(webSocketsServerPort, function() {
  console.log((new Date())
      + " Server is listening on port " + webSocketsServerPort);
});

/* ... */