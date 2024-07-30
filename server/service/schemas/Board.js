import { Schema, model } from 'mongoose';

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    icon: {
      type: String,
      required: [true, 'Icon is required'],
    },
    background: {
      type: String,
      required: [true, 'Background is required'],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Board = model('board', boardSchema);

export default Board;
