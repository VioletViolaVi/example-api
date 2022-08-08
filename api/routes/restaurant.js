const { Router } = require("express");

const restaurantController = require("../controller/restaurant");

const restaurantRouter = Router();

restaurantRouter.get("/", restaurantController.showFullMenu);
restaurantRouter.post("/", restaurantController.createMenuSlot);

module.exports = restaurantRouter;
