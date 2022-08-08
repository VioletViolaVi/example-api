// copy of database
const db = require("../dbConfig");

class Bus {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.capacity = data.capacity;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const allBusData = await db.query(`SELECT * FROM bus;`);
        const buses = allBusData.rows.map((b) => new Bus(b));
        resolve(buses);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  static async create(name, capacity) {
    try {
      const newBus = await db.query(
        `INSERT INTO bus (name, capacity) VALUES($1, $2) RETURNING *;`,
        [name, capacity]
      );
      const bus = new Bus(newBus.rows[0]);

      return bus;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

module.exports = Bus;
