const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes"); // 🔴 ADD THIS

const app = express();

app.use(cors());
app.use(express.json()); // ✅ already correct

const mongoURI = String(process.env.MONGO_URI).trim();

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Error:");
    console.error(err);
  });

// 🔴 THIS IS THE MOST IMPORTANT LINE
app.use("/api/contact", contactRoutes);

app.listen(5000, () =>
  console.log("🚀 Server running on port 5000")
);
