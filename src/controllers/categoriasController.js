import categorias from '../models/Categorias.js';

class CategoriaController {
  static listarCategorias = (req, res) => {
    categorias.find().exec((err, categorias) => {
      res.status(200).json(categorias);
    });
  };

  static listarCategoriaPorId = (req, res) => {
    const id = req.params.id;

    categorias.findById(id).exec((err, categorias) => {
      if (err || !categorias) {
        res.status(400).send({ message: `ID Não Encontrado` });
      } else {
        res.status(200).send(categorias);
      }
    });
  };

  static cadastrarCategoria = (req, res) => {
    let categoria = new categorias(req.body);

    categoria.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `Falha ao cadastrar categoria - Erro: (${err.message})` });
      } else {
        res.status(201).send(categoria.toJSON());
      }
    });
  };

  static atualizarCategoria = (req, res) => {
    const id = req.params.id;

    categorias.findByIdAndUpdate(id, { $set: req.body }, (err, docs) => {
      if (!docs){
        res.send({message: 'ID não existe'});
      } else if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: 'Vídeo atualizado!' });
      }
    });
  };

  static deletarCategoria = (req, res) => {
    const id = req.params.id;

    categorias.findByIdAndDelete(id, function (err, docs) {
      if (err || !docs) {
        res.status(500).send({ message: 'ID Não encontrado / Nada foi deletado' });
      } else {
        res.status(200).send({ message: 'Vídeo Deletado!'});
      }
    });
  };

}

export default CategoriaController;
