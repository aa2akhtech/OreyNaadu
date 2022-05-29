const mongoose = require("mongoose");
const { database } = require("../constants");

const connectionString = `mongodb+srv://${database.user}:${database.password}@${database.host}/${database.dbName}?retryWrites=true&w=majority`;

const oreyNaaduDb = mongoose.createConnection(connectionString);

module.exports = oreyNaaduDb;
