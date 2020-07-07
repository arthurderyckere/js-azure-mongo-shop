const mongoose = require("mongoose");


const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: Map,
        of: String,
        required: true
    },
    price: {
        type: Map,
        of: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: Array
    },
    category: {
        type: String
    },
    tags: {
        type: [String]
    },
    specs: {
        type: Map,
        of: String,
    }
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);

module.exports = {
    Product
};