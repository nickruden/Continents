var express = require('express');
var router = express.Router();

/* Главная */
router.get('/', function(req, res, next) {
    req.session.greeting = "Hi!!!",
    res.cookie('gretting', 'Hi!!!').render('index', { 
      title: 'Express',
      text: 'Проект "Континенты"',
      counter: req.session.counter
  })
});

module.exports = router;
