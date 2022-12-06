const { DataSource } = require("typeorm");

const dataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

dataSource
 .initialize()
 .then(() =>{
  console.log("Date source has benn initialized");
 })
 .catch((error) => {
  console.log("Error during Data Source initialization", error);
 });

 module.exports = dataSource