const express = require("express");

const router = express.Router();

const { addContact } = require("../controllers/contactController");

// Add Emergency Contact
router.post("/contacts", addContact);

module.exports = router;