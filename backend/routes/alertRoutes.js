const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const { createAlert ,
    cancelAlert,
    getDashboardStats,
    getAlerts
} = require("../controllers/alertController");

// SOS Alert Route
router.post("/alert", authMiddleware, createAlert);
router.put("/alert/:id/cancel", authMiddleware, cancelAlert);
router.get("/alerts", authMiddleware, getAlerts);
router.get("/dashboard-stats", authMiddleware, getDashboardStats);

module.exports = router;