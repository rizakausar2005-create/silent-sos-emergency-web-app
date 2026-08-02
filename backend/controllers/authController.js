const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Register Controller
const registerUser = async (req, res) => {

    try {

        const { name, email, phone, password } = req.body;

// Hash the password
const hashedPassword = await bcrypt.hash(password, 10);

// Create user with hashed password
const user = new User({
    name,
    email,
    phone,
    password: hashedPassword
});

await user.save();

        res.json({
            message: "User registered successfully!"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Registration Failed"
        });

    }

};

// Login Controller
const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
    return res.status(401).json({
        message: "Invalid Password"
    });
}

        res.json({
            message: "Login Successful"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

module.exports = {
    registerUser,
    loginUser
};