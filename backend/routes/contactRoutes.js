const express = require("express");

const router = express.Router();

const {
    addContact,
    getContacts,
    deleteContact
} = require("../controllers/contactController");

// Add Emergency Contact
router.post("/contacts", addContact);

// Get All Contacts
router.get("/contacts", getContacts);

// Delete Contact
router.delete("/contacts/:id", deleteContact);

module.exports = router;