const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller.js");
const validate = require("../middlewares/validate-middleware.js");
const { signupSchema } = require("../validators/auth-validator.js");
const { loginSchema } = require("../validators/auth-validator.js");
const authMiddleware = require("../middlewares/auth-middleware.js");


router.post('/login', validate(loginSchema), authcontrollers.login);
router.post('/signup', validate(signupSchema), authcontrollers.signup);
router.get('/user', authMiddleware ,authcontrollers.user);
router.get('/allusers', authcontrollers.getAllUsers);
router.put('/update-me/:userId', authcontrollers.updateUser);


module.exports = router;
