const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: { required: true, type: String },
});

mongoose.model('User', UserSchema);
