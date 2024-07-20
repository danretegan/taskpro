import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    name: {
      type: String,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [32, 'Name must be less than 32 characters long'],
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      maxlength: [255, 'Email must be less than 255 characters long'],
      match: [/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})$/, 'Invalid email address'],
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
        'Password must be between 8 and 32 characters and must include an uppercase letter, a lowercase letter, and a digit',
      ],
      required: [true, 'Password is required'],
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

const User = model('User', schema);

export default User;
