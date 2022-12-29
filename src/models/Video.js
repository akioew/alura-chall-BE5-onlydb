import mongoose, { mongo } from 'mongoose';

const videoSchema = new mongoose.Schema(
  {
    _id: { type: Number, ref: 'id', required: true },
    categoriaId: {
      type: mongoose.Schema.Types.Number,
      ref: 'categorias',
      required: true,
    },
    titulo: { type: String, required: true, maxlength: 20 },
    description: { type: String, required: true, maxlength: 240 },
    url: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const videos = mongoose.model('videos', videoSchema);

export default videos;
