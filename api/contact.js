const serverless = require("serverless-http");
const express = require("express");
const mongoose = require("mongoose");
const contactRoutes = require("../routes/contact");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Route
app.use("/api/contact", contactRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ Only export handler
module.exports = serverless(app);
