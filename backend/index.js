require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;

const connectToDatabase = require("./database/connect");

const app = express();

// Add support for POST request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to database
connectToDatabase();

//cors
const corsOptions = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type"],
  exposedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

// morgan (HTTP request logger)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// use routes which are required
const authRoutes = require("./routes/authRoute");
app.use("/auth", authRoutes);

// for testing purpose
app.get("/", (_, res) => {
  res.send("Server is up and running....");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
