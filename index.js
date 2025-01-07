// import exprress js module
var express = require("express");

// initializing the application using the express
var app = express();

// using the app, we are configuring the route of "GET" method and path is "/getUsers"
// whenever there is a request for this endpoint /getUsers, we get the response "Hello World!"
/*
    HTTP method: GET, POST, PUT, PATCH, DELETE

    URL based on the application
    app.method('URL', (req, res) => {
        // request captured
        // response as output    
    });

*/
app.get("/getUsers", (req, res) => {
    res.send('Hello World!');
});

app.get("/getTraining", (req, res) => {
    var trainingObj = {
        trainingId: 10,
        trainingName: "Express Course",
        active: true
    }
    
    res.send(trainingObj);
});

// we are starting the app at port 4000
// Node -> http.createServer
app.listen(4000);
