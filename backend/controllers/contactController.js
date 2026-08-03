const EmergencyContact = require("../models/EmergencyContact");

// Add Emergency Contact
const addContact = async (req, res) => {

    try {

        const { user, name, phone, relationship } = req.body;

        const newContact = new EmergencyContact({
            user,
            name,
            phone,
            relationship
        });

        await newContact.save();

        res.status(201).json({
            message: "Emergency Contact Added Successfully",
            contact: newContact
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to Add Contact"
        });

    }
    

};
// Get All Contacts
const getContacts = async (req, res) => {

    try {

        const { user } = req.query;

        const contacts = await EmergencyContact.find({ user });

        res.json(contacts);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to Fetch Contacts"
        });

    }

};

module.exports = {
    addContact,
    getContacts
};