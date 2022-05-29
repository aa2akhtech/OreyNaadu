const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    any: {},
  },
  {
    strict: false,
  }
);

module.exports = schema;
