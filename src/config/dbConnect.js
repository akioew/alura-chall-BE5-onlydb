import mongoose from "mongoose";

mongoose.connect(
  'mongodb+srv://***REMOVED***'
);

let db = mongoose.connection;

export default db;