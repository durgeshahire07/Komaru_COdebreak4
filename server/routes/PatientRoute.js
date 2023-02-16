const express = require("express");
const {
  signup,
  login,
  logout,
} = require("../controller/patientAuthController");
const { checkDoc } = require("../controller/addDoctorController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/add-doctor", checkDoc);

module.exports = router;
