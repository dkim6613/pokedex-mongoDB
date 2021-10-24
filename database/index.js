const mongoose = require('mongoose');
await mongoose.connect('mongodb://localhost/pokemon');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: String,
  type: String,
  img: String
})

const Model = mongoose.model('Model', mySchema)

