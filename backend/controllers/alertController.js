const Alert = require("../models/Alert");
const Contact = require("../models/EmergencyContact");

// Create SOS Alert
const createAlert = async (req, res) => {

    try {

        const { latitude, longitude } = req.body;

        const newAlert = new Alert({
            user: req.user.id,
            latitude,
            longitude,
            status: "Active"
        });

        await newAlert.save();

        res.status(201).json({
            message: "SOS Alert Sent Successfully",
            alert: newAlert
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to Send SOS Alert"
        });

    }

};


// Cancel / Resolve SOS Alert
const cancelAlert = async (req, res) => {

    try {

        const { id } = req.params;

        // Find the alert that the user wants to cancel
        const alert = await Alert.findOne({
            _id: id,
            user: req.user.id
        });

        if (!alert) {

            return res.status(404).json({
                message: "Alert not found"
            });

        }

        // Cancel this alert
        alert.status = "Cancelled";

        await alert.save();


        // Also cancel any other old active alerts
        // belonging to this same user.
        await Alert.updateMany(
            {
                user: req.user.id,
                status: "Active"
            },
            {
                $set: {
                    status: "Cancelled"
                }
            }
        );


        res.status(200).json({

            message: "SOS Alert Cancelled Successfully",

            alert

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Failed to Cancel SOS Alert"

        });

    }

};


// Get Logged-in User Alerts
const getAlerts = async (req, res) => {

    try {

        const alerts = await Alert.find({
            user: req.user.id
        }).sort({
            createdAt: -1
        });

        res.json(alerts);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to Fetch Alerts"
        });

    }

};


// Dashboard Statistics
const getDashboardStats = async (req, res) => {

    try {

        const totalAlerts = await Alert.countDocuments({
            user: req.user.id
        });

        const totalContacts = await Contact.countDocuments({
            user: req.user.id
        });

        res.status(200).json({
            totalAlerts,
            totalContacts,
            status: "Active"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to load dashboard statistics"
        });

    }

};


module.exports = {
    createAlert,
    cancelAlert,
    getAlerts,
    getDashboardStats
};