import mongoose, { mongo } from 'mongoose';

const categoriaSchema = new mongoose.Schema(
  {
    _id: { type: Number, ref: 'id', required: true },
    titulo: { type: String, required: true, maxlength: 20 },
    cor: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const categorias = mongoose.model('categorias', categoriaSchema);

export default categorias;
