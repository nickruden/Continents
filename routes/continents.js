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
  async.parallel([
    function(callback){
      Continent.findOne({nick:req.params.nick}, callback)},
    function(callback){
      Continent.find({},{_id:0,title:1,nick:1}, callback)}
],
  function(err,result){
    if(err) return next(err)
    var Continent = result[0]
    var Continents = result[1] || []
    if(!Continent) return next(new Error("Нет такого континента на Земле!"))
    res.render('Continent', {
      title: Continent.title,
      picture: Continent.avatar,
      desc: Continent.desc,
      menu: Continents
    });
  })
})


module.exports = router;
