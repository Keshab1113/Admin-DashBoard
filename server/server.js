require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const connectDB = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");
const cors = require("cors");
import rateLimit from "express-rate-limit";
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many login attempts from this IP,try again later",
});
const app = express();

app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: "GET, POST, DELETE, PATCH, HEAD, PUT",
  credentials: true,
};
app.use(cors(corsOptions));
app.use("/api/auth", loginLimiter, require("./router/auth-router.js"));
app.use("/api/home", loginLimiter, require("./router/home-router.js"));
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
});
