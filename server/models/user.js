const { default: mongoose, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    password: String,
    notes: [{
        info: { type: String }
    }]
})


const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
