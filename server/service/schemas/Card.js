import { Schema, model } from 'mongoose';

const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
    },
    deadline: {
      type: Date,
    },
  },
  { _id: true }
);

const Card = model('Card', cardSchema);

export default Card;
