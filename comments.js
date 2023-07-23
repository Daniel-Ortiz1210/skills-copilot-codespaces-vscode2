// Create web server application with Node.js
// Run: node comments.js
// Test in your browser: http://localhost:8080/
// ================================================

// Import modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var qs = require('querystring');

// Create a server
http.createServer(function (request, response) {
    // Get the path name
    var pathname = url.parse(request.url).pathname;
    // Print the name
    console.log("Request for " + pathname + " received.");
    // Read the requested file content from file system
    fs.readFile(pathname.substr(1), function (err, data) {
        // If error
        if (err) {
            // Print error to console
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            // Page found
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'});
            // Write the content of the file to response body
            response.write(data.toString());
        }
        // Send the response body
        response.end();
    });
}).listen(8080);

// Print message to console
console.log('Server running at http://localhost:8080/');
