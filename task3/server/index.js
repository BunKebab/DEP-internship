const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const connect = require("./config/db");

connect();
const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/auth", require("./routes/AuthRoutes"));
app.use("/api/products", require("./routes/ProductRoutes"));
app.use("/api/orders", require("./routes/OrderRoutes"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
