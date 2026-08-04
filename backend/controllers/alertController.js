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
    getAlerts
};