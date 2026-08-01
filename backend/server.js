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
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});