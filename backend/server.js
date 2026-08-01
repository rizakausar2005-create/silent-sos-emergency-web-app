require("dotenv").config();
console.log(process.env.MONGO_URI);

const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const User = require("./models/User");
const app = express();

const PORT = 5000;

// Allows Express to read JSON data
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Silent SOS Backend is Running...");
});

// Register API
app.post("/register", async (req, res) => {

    try {
        console.log(req.body);

        const user = new User(req.body);

        await user.save();

        res.json({
            message: "User registered successfully!"
        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Registration Failed"
        });

    }

});
// Login API
app.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        if (user.password !== password) {

            return res.status(401).json({
                message: "Invalid Password"
            });

        }

        res.json({
            message: "Login Successful"
        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

});
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});