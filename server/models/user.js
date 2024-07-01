const { default: mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    notes: [{
        info: { type: String }
    }]
})

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;