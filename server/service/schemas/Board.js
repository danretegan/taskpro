// service/schemas/Board.js

import { Schema, model } from 'mongoose';

// Definirea schema pentru coloane
const columnSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    _id: {
      type: Schema.Types.ObjectId,
      auto: true, // Generăm automat un ID pentru fiecare coloană
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
      ref: 'user', // Referință către schema User pentru a asocia board-ul cu un utilizator
      required: true,
    },
    columns: [columnSchema], // Lista de coloane (subdocumente)
  },
  { versionKey: false, timestamps: true }
);

const Board = model('board', boardSchema);

export default Board;
