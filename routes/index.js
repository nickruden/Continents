var express = require('express');
var router = express.Router();

/* Главная */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    text: 'Проект "Континенты"'
  });
});

module.exports = router;
