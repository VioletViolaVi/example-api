const { Router } = require("express");

const busController = require("../controller/bus");

const busRouter = Router();

busRouter.get("/", busController.show);
busRouter.post("/", busController.create);

module.exports = busRouter;
