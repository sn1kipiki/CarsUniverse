const { Sequelize } = require("sequelize");

// module.exports = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     dialect: "postgres",
//     // host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//   }
// );

module.exports = new Sequelize(process.env.DB_URL, {
  // host: 'localhost',
  dialect: "postgres",
  // operatorsAliases: false,
  port: 5432,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
