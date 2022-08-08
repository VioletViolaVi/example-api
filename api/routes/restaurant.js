const { Router } = require("express");

const restaurantController = require("../controller/restaurant");

const restaurantRouter = Router();

restaurantRouter.get("/", (req, res) => {
  res.send(restaurantController.showEverything);
});

module.exports = restaurantRouter;
