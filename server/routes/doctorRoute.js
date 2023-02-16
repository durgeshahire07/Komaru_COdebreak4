const express = require("express");
const {
  addPatient,
  patientsByDoctor,
} = require("../controller/addPatientController");
const router = express.Router();

const { login, signup, logout } = require("../controller/doctorAuthController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/add-patient", addPatient);
router.post("/patients-by-doc", patientsByDoctor);

module.exports = router;
