import express from 'express';
import categorias from './categoriasRoutes.js';
import videos from './videosRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Challenge BackEnd'});
  });
  app.use(express.json(), videos, categorias);
};

export default routes;