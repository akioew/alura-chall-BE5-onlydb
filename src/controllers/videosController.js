import videos from '../models/Video.js';

class VideoController {
  static listarVideos = (req, res) => {
    videos
      .find()
      .sort({ _id: 1 })
      .populate('categoriaId')
      .exec((err, videos) => {
        res.status(200).json(videos);
      });
  };

  static listarVideoPorId = (req, res) => {
    const id = req.params.id;

    videos
      .findById(id)
      .populate('categoriaId')
      .exec((err, videos) => {
        if (err) {
          res.status(400).send({ message: `ID Não Encontrado` });
        } else {
          res.status(200).send(videos);
        }
      });
  };

  static listarVideoPorTitulo = (req, res) => {
    const titulo = req.query.titulo
    
    videos.find({'titulo': titulo}, {})
    .populate('categoriaId')
    .exec((err, videos) => {
      if (!videos.length) {
        res.send({
          message:
            'Nenhum vídeo encontrado com esse nome',
        });
      } else if (err) {
        res
          .status(400)
          .send({message: `Nenhum vídeo encontrado com esse título - (${err.message})`});
      } else {
        res.status(200).send(videos);
      }
    })
  }

  static listarVideosPorCategoriaId = (req, res) => {
    const categoriaId = req.params.categoriaId;

    videos
      .find({ categoriaId: categoriaId }, {})
      .sort({ _id: 1 })
      .populate('categoriaId')
      .exec((err, videos) => {
        if (!videos.length) {
          res.send({
            message:
              'ID Não encontrado ou não existe vídeo cadastrado para esse ID',
          });
        } else if (err) {
          res.send({ message: `Erro: (${err.message})` });
        } else {
          res.status(200).send(videos);
        }
      });
  };

  static cadastrarVideo = (req, res) => {
    let video = new videos(req.body);

    video.save((err) => {
      if (err) {
        res
          .status(500)
          .send({
            message: `Falha ao cadastrar vídeo - Erro: (${err.message})`,
          });
      } else {
        res.status(201).send(video.toJSON());
      }
    });
  };

  static atualizarVideo = (req, res) => {
    const id = req.params.id;

    videos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Vídeo atualizado!' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deletarVideo = (req, res) => {
    const id = req.params.id;

    videos.findByIdAndDelete(id, function (err, docs) {
      if (err || !docs) {
        res
          .status(500)
          .send({ message: 'ID Não encontrado / Nada foi deletado' });
      } else {
        res.status(200).send({ message: 'Vídeo Deletado!' });
      }
    });
  };
}

export default VideoController;
