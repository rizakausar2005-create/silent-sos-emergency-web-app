const EmergencyContact = require("../models/EmergencyContact");


// Add Emergency Contact

const addContact = async (req, res) => {

    try {

        const { name, phone, relationship } = req.body;

        const newContact = new EmergencyContact({

            user: req.user.id,
            name,
            phone,
            relationship

        });

        await newContact.save();

        res.status(201).json({

            message: "Emergency Contact Added Successfully",
            contact: newContact

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Failed to Add Contact"

        });

    }

};


// Get All Contacts

const getContacts = async (req, res) => {

    try {

        const contacts = await EmergencyContact.find({

            user: req.user.id

        });

        res.json(contacts);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Failed to Fetch Contacts"

        });

    }

};


// Delete Emergency Contact

const deleteContact = async (req, res) => {

    try {

        const { id } = req.params;

        const contact = await EmergencyContact.findOne({

            _id: id,
            user: req.user.id

        });

        if (!contact) {

            return res.status(404).json({

                message: "Contact not found"

            });

        }

        await EmergencyContact.findByIdAndDelete(id);

        res.json({

            message: "Contact Deleted Successfully"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Failed to Delete Contact"

        });

    }

};


// Update Emergency Contact

const updateContact = async (req, res) => {

    try {

        const { id } = req.params;

        const contact = await EmergencyContact.findOne({

            _id: id,
            user: req.user.id

        });

        if (!contact) {

            return res.status(404).json({

                message: "Contact not found"

            });

        }

        const updatedContact =
            await EmergencyContact.findOneAndUpdate(

                {
                    _id: id,
                    user: req.user.id
                },

                {
                    name: req.body.name,
                    phone: req.body.phone,
                    relationship: req.body.relationship
                },

                {
                    new: true
                }

            );

        res.json({

            message: "Contact Updated Successfully",
            updatedContact

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Failed to Update Contact"

        });

    }

};


module.exports = {

    addContact,
    getContacts,
    deleteContact,
    updateContact

};