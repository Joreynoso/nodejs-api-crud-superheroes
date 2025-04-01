import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema({
  nombreSuperHeroe: { type: String, required: true },
  nombreReal: { type: String, required: true },
  edad: { type: Number, min: 0 },
  planetaOrigen: { type: String, default: 'Desconocido' },
  debilidad: { type: String },
  poderes: [String],
  aliados: [String],
  enemigos: [String],
  creador: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const heroModel = mongoose.model('Hero', heroSchema, 'Grupo-01');

export default heroModel;
