import mongoose from "mongoose";

mongoose.connect(
  //'mongodb+srv://XXXXX' Inserir dados de conexão com o Banco de Dados
);

let db = mongoose.connection;

export default db;
