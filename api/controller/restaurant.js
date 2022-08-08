const Restaurant = require("../model/Restaurant");

async function showEverything(req, res) {
  try {
    const restaurants = await Restaurant.displayAllFood();
    res.status(200).json({
      restaurants: restaurants
    });
  } catch (err) {
    res.json({
      error: err
    });
  }
}

module.exports = showEverything;
