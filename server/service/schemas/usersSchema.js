import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    name: {
      type: String,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [32, 'Name must be less than 32 characters long'],
      required: [true, 'Name is required'],
      match: [
        /^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]*$/,
        'Name contains invalid characters',
      ],
    },
    email: {
      type: String,
      maxlength: [255, 'Email must be less than 255 characters long'],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email address',
      ],
      required: [true, 'Email is required'],
      unique: true,
    },

    password: {
      type: String,
      minlength: [8, 'Password must be at least 8 characters'],
      maxlength: [64, 'Password must be less than 64 characters'],
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=\S+$).{8,64}$/,
        'Password must be between 8 and 64 characters and must include an uppercase letter, a lowercase letter, a digit, and a special character, and cannot contain spaces',
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
