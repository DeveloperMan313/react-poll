const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const uri = process.env.DB_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connected");
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
    origin: process.env.FRONTEND_ORIGIN_URL,
};
app.use(cors());

const pollRouter = require("./routes/poll");
const userRouter = require("./routes/user");

app.use("/poll", pollRouter);
app.use("/user", userRouter);

app.listen(4000);
