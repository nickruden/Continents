var express = require('express');
var router = express.Router();
var Continent = require("../models/continent").Continent;
var async = require("async");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с continents')
});

/* Страница континентов */
router.get('/:nick', function(req, res, next) {
    Continent.findOne({nick:req.params.nick}, function(err, continent){
    if(err) return next(err)
    if(!continent) return next(new Error("Нет такого континента на Земле!"))
    res.render('continent', {
      title: continent.title,
      picture: continent.avatar,
      desc: continent.desc
    });
  })
})


module.exports = router;
