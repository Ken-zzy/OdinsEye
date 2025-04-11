import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

// Load env variables
dotenv.config();

// App setup
const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Test route
app.get("/", (_req, res) => {
  res.send("TruthCheck backend is running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
