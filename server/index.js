const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { notFound } = require("./middlewares/notFound");
const { errorHandler } = require("./middlewares/error");
const { productRouter } = require("./api/products/products");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 1337;

mongoose.connect(process.env.MONGODB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

app.use(morgan("common"));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: 'Hello World!',
        environment: process.env.NODE_ENV
    });
});
// api routes

app.use("/api/products", productRouter);

// fallback
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
