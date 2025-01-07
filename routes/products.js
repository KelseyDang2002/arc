// import express
var express = require("express");

// create router object
var router = express.Router();

// /products/
router.get('/', (req, res) => {
    res.send("Get Request for Products");
});

// /products/get-product-details
router.get('/get-product-details', (req, res) => {
    res.send("Get Product Details");
});

router.post('/create-product', (req, res) => {
    res.send("Create product");
});

router.put('/update-product', (req, res) => {
    res.send("Update product");
});

router.get('/read-all-products', (req, res) => {
    res.send("List of products");
});

router.get('/get-product-details', (req, res) => {
    const userObj = {
        id: 10,
        firstName: "Kelsey",
        lastName: "Dang",
        status: true
    }
    res.send(userObj);
});

router.delete('/delete-product', (req, res) => {
    res.send("Delete product");
});

// export products module
module.exports = router;
