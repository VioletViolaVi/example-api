const db = require("../dbConfig");

class Restaurant {
  constructor(data) {
    this.id = data.id;
    this.food = data.food;
    this.price = data.price;
  }

  static displayAllFood() {
    const allFood = db.query("SELECT * FROM restaurant");
    return allFood;
  }
}

module.exports = Restaurant;
