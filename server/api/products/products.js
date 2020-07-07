const express = require("express");
const { Product } = require("../../models/product");

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const product = new Product(req.body);
        const createdProduct = await product.save();
        res.json(createdProduct);
    }
    catch (error) {
        if (error.name === "ValidationError") {
            res.status(422);
        }
        next(error);
    }
});

module.exports = { productRouter: router };