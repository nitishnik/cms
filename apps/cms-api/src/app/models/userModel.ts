import { Schema, model } from 'mongoose';
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Please enter a username'],
    },
    email: {
      type: String,
      required: [true, 'Please enter an email address'],
      unique: [true, 'Email already exists'],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
    },
  },
  {
    timestamps: true,
  }
);

export default model('User', userSchema);
