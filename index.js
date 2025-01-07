// import express js module
var express = require("express");

// import products
var products = require('./routes/products');

// import users
var users = require('./routes/users');

// initializing the application using the express
var app = express();

app.use('/products', products);
app.use('/users', users);

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

/*
    Suppose we are building for an e-commerce application
        - Users
        - Products
        - Items
        - Reviews
        - Comments
        - Images
        - Videos
        - Returns
        - Orders
        - etc. (complex)

    CRUD Operations for all of these

    our application we did not start coding and its messy already
        - we cannot maintain this code

    What is the solution?
        - Router
            - Modular approach of routes
            - Easy to maintain code
            - Easy to fix bugs
            - Develop easily in large teams
*/

// we are starting the app at port 4000
// Node -> http.createServer
app.listen(4000);
