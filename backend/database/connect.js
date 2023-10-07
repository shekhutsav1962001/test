require("dotenv").config();
const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const con = mongoose.connection;
  con.on("open", () => {
    console.log("database connected in mongo atlas");
  });
  con.on("error", (err) => {
    console.log("Error! while connecting database");
  });
}

module.exports = connectToDatabase;
