const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    addContact,
    getContacts,
    deleteContact,
    updateContact
} = require("../controllers/contactController");

// Add Emergency Contact
router.post("/contacts", authMiddleware, addContact);

// Get All Contacts
router.get("/contacts", authMiddleware, getContacts);

// Delete Contact
router.delete("/contacts/:id", authMiddleware, deleteContact);

// Update Contact
router.put("/contacts/:id", authMiddleware, updateContact);

module.exports = router;