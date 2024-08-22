const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const connect = require("./config/db");

connect();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", require("./routes/AuthRoutes"));
app.use("/api/products", require("./routes/ProductRoutes"));
app.use("/api/orders", require("./routes/OrderRoutes"));

app.listen(PORT);
console.log(`listening to port ${PORT}`);
