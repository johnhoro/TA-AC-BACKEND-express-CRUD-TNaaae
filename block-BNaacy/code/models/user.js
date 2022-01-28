var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    user: { type: String, required: true },
  },
  { timestamps: true }
);

var User = mongoose.model("User", userSchema);

module.exports = User;
