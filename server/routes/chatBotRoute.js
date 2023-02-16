const express = require("express");
const router = express.Router();

const { chatBot } = require("../controller/chatBotController");

router.post("/chat-bot", chatBot);

module.exports = router;
