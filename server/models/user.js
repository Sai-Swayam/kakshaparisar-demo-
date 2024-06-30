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
    notes: [
      {
        content: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
