var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect');
// var Continent = require("../models/continent").Continent;
var async = require("async");
// var checkAuth = require("./../middleware/checkAuth.js")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с continents')
});

/* Страница континентов на MySQL */
router.get('/:nick' ,function(req, res, next) {
  db.query(`SELECT * FROM continents WHERE continents.nick = '${req.params.nick}'`, (err, continents) => {
    if(err) {
      console.log(err);
      if(err) return next(err)
    } else {
      if(continents.length == 0) return next(new Error("Нет такого котенка в мультике"))
      var continent = continents[0];
      res.render('continent', {
        title: continent.title,
        picture: continent.avatar,
        desc: continent.about
      })
    }
  })
})

/* Страница континентов на mongodb*/
// router.get('/:nick', checkAuth,function(req, res, next) {
//     Continent.findOne({nick:req.params.nick}, function(err, continent){
//     if(err) return next(err)
//     if(!continent) return next(new Error("Нет такого континента на Земле!"))
//     res.render('continent', {
//       title: continent.title,
//       picture: continent.avatar,
//       desc: continent.desc
//     });
//   })
// })

module.exports = router;
