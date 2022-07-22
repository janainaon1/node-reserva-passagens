var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Day = require('../models/day').model;

router.post('/', function (req, res, next) {
  console.log('request attempted');

  console.log(req.body);
  const datetime = new Date(req.body.data);

  Day.find({ date: datetime }, (err, docs) => {
    if (!err) {
      if (docs.length > 0) {
        console.log('Dados já existentes');
        res.status(200).send(docs[0]);
      } else {
        const allTables = require('../data/allTables');
        const day = new Day ({
          date: datetime,
          tables: allTables
        });
        day.save(err => {
          if (erro) {
            res.status(400).send('Erro na hora de salvar a data');
          } else {
            console.log('Criada uma nova data');
            Day.find({ date: datetime }, (err, docs) => {
              err ? res.sendStatus(400) : res.status(200).send(docs[0]);
            });
          }
        });
      }
    } else {
      res.status(400).send('Não foram encontrados dados para data');
    }
  });
});

module.exports = router;