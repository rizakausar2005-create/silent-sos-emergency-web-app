const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const { createAlert ,
    getAlerts
} = require("../controllers/alertController");

// SOS Alert Route
router.post("/alert", authMiddleware, createAlert);
router.get("/alerts", authMiddleware, getAlerts);

module.exports = router;