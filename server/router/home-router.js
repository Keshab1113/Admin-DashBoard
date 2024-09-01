const express = require("express");
const router = express.Router();
const homeCon = require("../controllers/home-controller");
const { validateDevice, validateDeviceId } = require("../validators/deviceValidator");

router.route('/devices').get(homeCon.getHomeData);
router.route("/addSystem").post(validateDevice, homeCon.addSystem);
router.route("/updateSystem/:id").post(validateDeviceId, validateDevice, homeCon.updateSystem);
router.route("/delSystem/:id").delete( homeCon.deleteSystem);


module.exports = router;
