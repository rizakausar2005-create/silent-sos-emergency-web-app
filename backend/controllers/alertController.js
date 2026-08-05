const Alert = require("../models/Alert");

// Create SOS Alert
const createAlert = async (req, res) => {

    try {

        const {latitude, longitude } = req.body;

        const newAlert = new Alert({
            user: req.user.id,
            latitude,
            longitude
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
// Cancel Latest SOS Alert
const cancelAlert = async (req, res) => {

    try {

        const latestAlert = await Alert.findOne({
            user: req.user.id
        }).sort({ createdAt: -1 });

        if (!latestAlert) {

            return res.status(404).json({
                message: "No active alert found"
            });

        }

        latestAlert.status = "Cancelled";

        await latestAlert.save();

        res.json({
            message: "SOS Alert Cancelled Successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to Cancel Alert"
        });

    }

};

const getDashboardStats = async (req, res) => {

    try {

        const Alert = require("../models/Alert");
        const Contact = require("../models/Contact");

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

// Get Logged-in User Alerts
const getAlerts = async (req, res) => {

    try {

        const alerts = await Alert.find({
            user: req.user.id
        }).sort({
            createdAt: -1
        });

        res.json(alerts);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to Fetch Alerts"
        });

    }

};
module.exports = {
    createAlert,
    cancelAlert,
    getDashboardStats,
    getAlerts
};