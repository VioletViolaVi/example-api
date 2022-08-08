const Restaurant = require("../model/Restaurant");

async function showFullMenu(req, res) {
  try {
    const restaurants = await Restaurant.displayFullMenu();
    res.json({
      restaurants: restaurants
    });
  } catch (err) {
    res.json({
      error: err
    });
  }
}

async function createMenuSlot(req, res) {
  try {
    const food = req.body.food;
    const price = req.body.price;

    const createdMenu = await Restaurant.addMenuSlot(food, price);
    res.json({
      restaurantMenu: createdMenu
    });
  } catch (err) {
    res.json({
      error: err
    });
  }
}

module.exports = { showFullMenu, createMenuSlot };
