const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const { createAlert } = require("../controllers/alertController");

// SOS Alert Route
router.post("/alert", authMiddleware, createAlert);

module.exports = router;