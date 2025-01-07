// import express
var express = require("express");

// create router object
var router = express.Router();

// /users/
router.get('/', (req, res) => {
    res.send("Get Request for Users");
});

// /users/get-product-details
router.get('/user-details', (req, res) => {
    res.send("Get User Details");
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
