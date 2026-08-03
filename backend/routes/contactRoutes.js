const express = require("express");

const router = express.Router();

const {
    addContact,
    getContacts
} = require("../controllers/contactController");

// Add Emergency Contact
router.post("/contacts", addContact);

// Get All Contacts
router.get("/contacts", getContacts);

module.exports = router;