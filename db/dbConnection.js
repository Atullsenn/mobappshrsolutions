var mysql = require("mysql");



const connection = mysql.createConnection({
  host: "database-3.cddnnrlyqkrw.ap-northeast-1.rds.amazonaws.com",
  user: "brighthrAdmin",
  password: "brighthrdbmaster",
  database: "brighthrdb",


  // host: "localhost",
  // user: "root",//brighthrAdmin
  // password: "",//brighthrdbmaster
  // database: "mobapps_bright_hr_db",
});



connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Database Connected Successfully");
  }
});

module.exports = connection;

