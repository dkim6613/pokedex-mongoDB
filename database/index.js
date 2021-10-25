//MongoDB
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/');
// }

// const pokedexSchema = new mongoose.Schema({
//   name: String,
//   type: String,
//   img: String
// })

// module.exports = mongoose.model('pokedex', pokedexSchema)

// module.exports.create = async(pokemon) => {
//   if (!pokemon) {
//     throw new Error('missing pokemon')
//   }
//   await pokedexModel.create(pokemon)
// }

// module.exports.find = async() => {
//   console.log('pokedexModel: ', pokedexModel)
//   await pokedexModel.find({}, function(err, pokemons) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(pokemons)
//     }
//   })
// }


//mySQL

const mysql = require('mysql2');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'pokedex'
})

connection.connect();

module.exports = connection;


