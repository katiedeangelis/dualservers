// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORTONE = 7000;
var PORTTWO = 7500;

function compliment(request, response) {
    response.end("You are currently living, and that's awesome!");
}

function criticism(request, response) {
    response.end("You will die one day, and that's a bummer...");
}

var serverone = http.createServer(compliment);
var servertwo = http.createServer(criticism);

serverone.listen(PORTONE, function () {
    console.log("Server listening on: http://localhost:" + PORTONE);
});

servertwo.listen(PORTTWO, function () {
    console.log("Server listening on: http://localhost:" + PORTTWO);
});