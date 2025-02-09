const express = require("express");
const cors = require("cors");
const busRouter = require("./routes/bus");
const restaurantRouter = require("./routes/restaurant");

const api = express();

// add middleware
api.use(express.json());
api.use(cors());

api.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// set up bus routes
api.use("/buses", busRouter);
api.use("/restaurants", restaurantRouter);

module.exports = api;
