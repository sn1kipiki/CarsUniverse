const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

// module.exports = new Sequelize(
//   "postgres://admin:@dpg-cevimug2i3mntl299ol0-a.frankfurt-postgres.render.com:5432/carsuniverse"
// );
