const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller.js");


router.post('/login', authcontrollers.login)
router.post('/signup', authcontrollers.signup)
router.get('/user', authcontrollers.checkAuth);
router.post('/logout', authcontrollers.logout);



module.exports = router;
