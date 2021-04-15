require("dotenv").config();
const log = require("./middleware/log");
const express = require("express");
const app = express();
const businessRouter = require("./routes/business");

//middleware
app.use(express.urlencoded());
app.use(express.json());
// app.use(log);

// routers
app.use("/business", businessRouter);

app.post("/business/reg");

module.exports = app;
