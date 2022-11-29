var express = require('express');
var router = express.Router();
var Continent = require("../models/continent").Continent;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с continents');
});

/* Страница континентов */
router.get('/:nick', function(req, res, next) {
  console.log('в роутере')
  console.log(req.params.nick)
  Continent.findOne({ nick: req.params.nick}, function(err, Continent) {
    if(err) return next(err)
    if(!Continent) return next(new Error("Нет такого континента на Земле!"))
    res.render('continent', {
      title: Continent.title,
      picture: Continent.avatar,
      desc: Continent.desc
    })
  })
}) 




module.exports = router;
