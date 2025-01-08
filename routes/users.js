// import express
var express = require("express");

// create router object
var router = express.Router();

// now has a 3rd param called next
// this is a middleware
// whenever an endpoint is called, this method is called first
// we can also chain the methods
router.use('/', (req, res, next) => {
    // we can use this to check if user is authenticated
    // check if data is correct
    // check if all data is present
    // check if it is active, etc.
    // doesn't allow the next methods to be called unless the middleware is satisfied
    req.headers["content-type"] = 'application/json'; // headers
    console.log("API call received"); // send this to the server
    // logs the message and then continues to next method
    next();
});

// /users/
router.get('/', (req, res, next) => {
    res.send("Headers received" + req.headers["content-type"]);
    // res.send("Get Request for Users");
    next();
});

router.use('/', (req, res) => {
    console.log("API call ended"); // send this to the server
});

/*
1. Build dynamic URLs in our modules
2. Pass 1 or more params in the URL
3. We collect the data using req.paramas.<variable>
*/

// /users/get-product-details of a certain user
router.get('/user-details/:id', (req, res) => {
    // pass a single parameter
    res.send("Get User Details " + req.params.id);
});

// pass 2 parameters
router.get('/search-by-location/:state/:city', (req, res) => {
    res.send("Location: " + req.params.state + " " + req.params.city);
});

// Regex
// allow numbers from 0-9 and only 4 digits in this URL
// change to allow letters a-z and A-Z and only 5 characters long
router.get('/search-username/:key([a-zA-Z]{5})', (req, res) => {
    res.send("Data captured is " + req.params.key);
});

// define wild card route, * means it does not match
router.get('*', (req, res) => {
    var resObj = {
        statusCode: 404,
        statusMsg: "URL not found",
    }

    res.send(resObj);
});

router.post('/create-user', (req, res) => {
    res.send("Create user");
});

router.put('/update-user', (req, res) => {
    res.send("Update user");
});

router.get('/read-all-users', (req, res) => {
    res.send("List of Users");
});

router.get('/get-user-details', (req, res) => {
    const userObj = {
        id: 10,
        firstName: "Kelsey",
        lastName: "Dang",
        status: true
    }
    res.send(userObj);
});

router.delete('/delete-user', (req, res) => {
    res.send("Delete user");
});

// export products module
module.exports = router;
