import { Schema, model } from 'mongoose';

// Definirea schema pentru coloane
const columnSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
  },
  { _id: false }
);

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
    columns: [columnSchema], // Adăugarea subdocumentelor pentru coloane
  },
  { versionKey: false, timestamps: true }
);

const Board = model('board', boardSchema);

export default Board;
