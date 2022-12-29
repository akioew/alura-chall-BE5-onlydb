import express from "express";
import CategoriaController from '../controllers/categoriasController.js';

const router = express.Router();

router
  .get('/categorias', CategoriaController.listarCategorias)
  .post('/categorias', CategoriaController.cadastrarCategoria)
  .get('/categorias/:id', CategoriaController.listarCategoriaPorId)
  .put('/categorias/:id', CategoriaController.atualizarCategoria)
  .delete('/categorias/:id', CategoriaController.deletarCategoria);

  export default router;