module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "rini28",
  PORT: 5432,
  DB: "testDB",
  dialect: "postgres",
  pool: {
    max: 5, //max conn di pool
    min: 0,
    acquire: 30000, //max time (ms) pool mencoba buat bikin conn sebelum throwing error
    idle: 10000, //max time (ms) conn bisa idle sebelum released
  }, //parameter optional buat sequelize connection pool configuration
};
