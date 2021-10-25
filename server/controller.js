// const Pokedex = require('../database/index.js');
const db = require('../database/index.js');

const controller = {

  get: (req, res) => {
    const queryStr = `select * from pokemon left join types on pokemon.typeNum = types.id left join images on pokemon.imageNum = images.id`;

    db.query(queryStr, (err, results) => {
      if (err) {
        res.status(404).send(err)
      } else {
        // console.log('server results:', results)
        res.status(200).send(results)
      }
    })
  },

  put: (req, res) => {
    let { id } = req.params;
    let { name } = req.body;
    console.log('this is req.body: ', req.body)
    console.log('this is req.params', req.params)
    const queryStr = `update pokemon set name="${name}" where id = ${id}`;

    db.query(queryStr, (err, results) => {
      if (err) {
        res.status(404).send(err)
      } else {
        res.status(200).send(results)
      }
    })
  },

  delete: function (req, res) {
    let { id } = req.params;
    console.log('this is req.params', req.params)
    const queryStr = `delete from pokemon where id = ${id}`;

    db.query(queryStr, (err, results) => {
      if (err) {
        res.status(404).send(err)
      } else {
        res.status(200).send(results)
      }
    })
  },

  postPokemon: function (req, res) {
    let { name } = req.body;

    const queryStr = `insert into pokemon (name) values ("${name}")`;

    db.query(queryStr, (err, results) => {
      if (err) {
        console.log('errrrrrrrrrrorr', err)
        res.status(404).send(err)
      } else {
        console.log('this is results', results)
        res.status(200).send('Successfully added new Pokemon')
      }
    })
  },

  postType: function (req, res) {
    let { type } = req.body;

    const queryStr = `insert into types (type) values ("${type}")`;

    db.query(queryStr, (err, results) => {
      if (err) {
        console.log('errrrrrrrrrrorr', err)
        res.status(404).send(err)
      } else {
        console.log('this is results', results)
        res.status(200).send('Successfully added new Pokemon')
      }
    })
  },

  postImage: function (req, res) {
    let { img } = req.body;

    const queryStr = `insert into images (img) values ("${img}")`;

    db.query(queryStr, (err, results) => {
      if (err) {
        console.log('errrrrrrrrrrorr', err)
        res.status(404).send(err)
      } else {
        console.log('this is results', results)
        res.status(200).send('Successfully added new Pokemon')
      }
    })
  }




  //mongoose get and create
  // get: (req, res) => {
  //   console.log("get");
  //   Pokedex.find({}, function (err, pokemons) {
  //     console.log("pokemons", pokemons);
  //     if (!err) {
  //       res.status(200).send(pokemons);
  //     }
  //     res.status(500).send();
  //   });
  // },

  // create: (req, res) => {
  //     console.log("create", req);
  //     console.log('this is req.body', req.body)
  //     const { name, type, img } = req.body;
  //     const record = new Pokedex({name: name, type: type, img: img});
  //     console.log("record", record)
  //     record.save().then(() => res.status(200).send());
  //   }
}

module.exports = controller;