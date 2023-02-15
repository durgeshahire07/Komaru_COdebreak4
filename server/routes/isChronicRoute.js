const express = require("express");
const router = express.Router();

const { isChronic } = require("../controller/isChronicController");

router.post("/is-chronic", isChronic);

module.exports = router;
