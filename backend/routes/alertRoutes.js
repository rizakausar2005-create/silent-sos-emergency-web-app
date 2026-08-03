const express = require("express");

const router = express.Router();

const { createAlert } = require("../controllers/alertController");

// SOS Alert Route
router.post("/alert", createAlert);

module.exports = router;