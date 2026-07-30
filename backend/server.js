const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 5000;

// Allows Express to read JSON data
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Silent SOS Backend is Running...");
});

// Register API
app.post("/register", (req, res) => {

    console.log(req.body);

    res.json({
        message: "User registered successfully!"
    });

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});