const express = require("express");
const router = express.Router();
const homeCon = require("../controllers/home-controller.js");
const { isAuthenticated } = require('../middlewares/auth-middleware.js')



router.route("/systems").post(isAuthenticated, homeCon.getHomeData);
router.route("/addSystem").post(isAuthenticated, homeCon.addSystem);
router.route("/updateSystem").post(isAuthenticated, homeCon.updateSystem);
router.route("/delSystem").post(isAuthenticated, homeCon.deleteSystem);


module.exports = router;