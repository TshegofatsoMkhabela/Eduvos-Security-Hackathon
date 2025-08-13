const dotenv = require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

// Database Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.log("Database not connected", error));

const allowedOrigins = [process.env.CORS_ORIGIN, "http://localhost:5173"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/authRoutes"));

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
