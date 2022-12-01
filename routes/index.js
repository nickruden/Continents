var express = require('express');
var router = express.Router();
var Continent = require("../models/continent").Continent

/* Главная */
router.get('/', function(req, res, next) {
  Continent.find({}, {_id:0, title:1, nick:1}, function(err, menu){
    res.render('index', { 
      title: 'Express',
      text: 'Проект "Континенты"',
      menu: menu
    })
  });
});

module.exports = router;
