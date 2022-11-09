var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Евразия */
router.get('/eurasia', function(req, res, next){
  res.send("<h1>Континент Евразия</h1>")
});

/* Африка */
router.get('/africa', function(req, res, next){
  res.send("<h1>Континент Африка</h1>")
});

/* Северная Америка */
router.get('/north_america', function(req, res, next){
  res.send("<h1>Континент Северная Америка</h1>")
});

/* Южная Америка */
router.get('/south_america', function(req, res, next){
  res.send("<h1>Континент Южная Америка</h1>")
});

/* Австралия */
router.get('/australia', function(req, res, next){
  res.send("<h1>Континент Австралия</h1>")
});

/* Антарктида */
router.get('/antarctica', function(req, res, next){
  res.send("<h1>Континент Антарктида</h1>")
});

module.exports = router;
