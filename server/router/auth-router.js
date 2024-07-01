const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller.js");
// const { signupSchema, loginSchema } = require("../validators/auth-validator.js");
// const validate = require("../middlewares/validate-middleware.js")
// const authMiddleware = require("../middlewares/auth-middleware.js");
const { isAuthenticated } = require('../middlewares/auth-middleware.js')

// router.route("/").get(authcontrollers.home);
// router.route("/signup").post(validate(signupSchema), authcontrollers.signup);
// router.route("/login").post(authcontrollers.login);
// router.route("/user").get(isAuthenticated, authcontrollers.checkAuth);
// router.route('/logout').get(authcontrollers.logout);

router.post('/login', authcontrollers.login)
router.get('/user', authcontrollers.checkAuth);
router.post('/logout', authcontrollers.logout);


// router.post('/getSystems',isAuthenticated, getSystems);


module.exports = router;
