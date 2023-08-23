const express = require("express");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const UserRoute = require("./Routes/UserRoute");
const connectDB = require("./Config/db");
require("dotenv").config();

const app = express();
connectDB();

app.use(
  cors({
    origin: "*",
  })
);

app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/route", UserRoute);

app.listen(process.env.PORT, () => {
  console.log(`connected at port ${process.env.PORT}`);
});
