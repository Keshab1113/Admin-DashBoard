require('dotenv').config();
const express = require("express");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require("passport");
const MongoStore = require('connect-mongo');
const connectDB = require("./utils/db.js");
const errorMiddleware = require('./middlewares/error-middleware.js');


const cors = require("cors");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Session Configuration
app.use(session({
    name: 'app_name.sid',
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
            // secure: true, // Set to true if using HTTPS
            // httpOnly: true, // Ensure the cookie is only accessible via HTTP(S)
            // sameSite: 'none' // Allow cross-origin requests
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        collectionName: process.env.MONGO_SESS_COL,
        touchAfter: 24 * 3600, // Time period in seconds
        crypto: {
            algorithm: 'aes-256-gcm',
        },
    }),
}));

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, DELETE, PATCH, HEAD",
    credentials: true,
}

// Passport Configuration
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));



// Routes
app.use("/api/auth", require("./router/auth-router.js"));
app.use("/api/home", require("./router/home-router.js"));

// Error Middleware
app.use(errorMiddleware);

app.post('/api/save-layout', (req, res) => {
    const layout = req.body.layout;
    console.log('Received layout:', layout);
    // Here you would typically save the layout to a database
    res.status(200).send({ message: 'Layout saved successfully!' });
});

// Start Server
const port = process.env.PORT || 8000;
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    });
});