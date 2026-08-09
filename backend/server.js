require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const alertRoutes = require("./routes/alertRoutes");
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", authRoutes);
app.use("/", alertRoutes);
app.use("/", contactRoutes);
app.get("/", (req, res) => {
  res.send("Silent SOS Backend is Running...");
});

// Database Connection
connectDB();

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});