const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://Nader:Nour_123@cluster0.rkvk0bg.mongodb.net/Pizza-Delivery-App"; // we have to replace 'test' with database name

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB connection sucsessfull");
});


db.on("error", () => {
    console.log("Mongo DB connection failed");
  });

module.exports = mongoose
  