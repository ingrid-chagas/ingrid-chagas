const mongoose = require('mongoose');

const username = "admin";
const password = "tzfHFoeSfODRlXZh";
const cluster = "cluster0.ywyvg";
const namedb = "myFirstDatabase";

mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${namedb}?retryWrites=true&w=majority`
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

mongoose.Promise = global.Promise;

module.exports = mongoose;