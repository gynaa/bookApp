const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    bio: { type: String, required: false },            // Optional field for the user's bio
    favoriteBook: { type: String, required: false } 
});

const User = mongoose.model('User', UserSchema);

module.exports = User;