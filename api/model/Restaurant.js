const db = require("../dbConfig");

class Restaurant {
  constructor(data) {
    this.id = data.id;
    this.food = data.food;
    this.price = data.price;
  }

  static async displayFullMenu() {
    try {
      const fullMenu = await db.query("SELECT * FROM restaurant;");
      const restaurants = fullMenu.rows.map(
        (singleRow) => new Restaurant(singleRow)
      );
      return restaurants;
    } catch (err) {
      console.log(err);
    }
  }

  /* 
    - SAME AS ABOVE BUT USES 'new Promise()':
    static displayFullMenu() {
      return new Promise(async (resolve, reject) => {
        try {
          const fullMenu = await db.query("SELECT * FROM restaurant;");
          const restaurants = fullMenu.rows.map(
            (singleRow) => new Restaurant(singleRow)
          );
          resolve(restaurants);
        } catch (err) {
          console.log(err);
          reject(err);
        }
      });
    }
*/

  static async addMenuSlot(food, price) {
    try {
      const newMenuSlot = await db.query(
        `INSERT INTO restaurant (food, price) VALUES($1, $2) RETURNING *;`,
        [food, price]
      );
      const menu = new Restaurant(newMenuSlot.rows[0]);
      return menu;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

module.exports = Restaurant;
