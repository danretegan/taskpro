// service/schemas/Card.js

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
    boardId: {
      type: Schema.Types.ObjectId,
      ref: 'board', // Referință către schema Board
      required: true,
    },
    columnId: {
      type: Schema.Types.ObjectId,
      ref: 'board.columns', // Referință către coloana specifică din Board
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Card = model('Card', cardSchema);

export default Card;
