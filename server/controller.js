const Pokedex = require('../database/index.js');

const controller = {
  get: (req, res) => {
    console.log("get");
    Pokedex.find({}, function (err, pokemons) {
      console.log("pokemons", pokemons);
      if (!err) {
        res.status(200).send(pokemons);
      }
      res.status(500).send();
    });
  },

  create: (req, res) => {
      console.log("create", req);
      console.log('this is req.body', req.body)
      const { name, type, img } = req.body;
      const record = new Pokedex({name: name, type: type, img: img});
      console.log("record", record)
      record.save().then(() => res.status(200).send());
    }
}

module.exports = controller;