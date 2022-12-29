import express from "express";
import VideoController from '../controllers/videosController.js';

const router = express.Router();

router
  .get('/videos', VideoController.listarVideos)
  .get('/videos/search', VideoController.listarVideoPorTitulo)
  .post('/videos', VideoController.cadastrarVideo)
  .get('/videos/:id', VideoController.listarVideoPorId)
  .get('/categorias/:categoriaId/videos', VideoController.listarVideosPorCategoriaId)
  .put('/videos/:id', VideoController.atualizarVideo)
  .delete('/videos/:id', VideoController.deletarVideo);

  export default router;