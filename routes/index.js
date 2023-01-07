var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect')
// var Continent = require("../models/continent").Continent
// var User = require("./../models/user").User
// var checkAuth = require("./../middleware/checkAuth.js")

/* Главная */
router.get('/', function(req, res, next) {
  db.query(`SELECT title, nick FROM continents`, (err, menu) => {
    req.session.greeting = "Hi!!!",
    res.cookie('gretting', 'Hi!!!').render('index', { 
      title: 'Express',
      text: 'Проект "Континенты"',
      menu: menu,
      counter: req.session.counter
    })
  });
});


/* Страница регистрации */
router.get('/logreg', function(req, res, next){
  res.render('logreg',{
    title: 'Вход', 
    error: null
  });
})

router.post('/logreg', function(req, res, next){
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username:username},function(err,user){
    if(err) return next(err)
    if(user){
	    if(user.checkPassword(password)){
        req.session.user = user._id
        res.redirect('/')
      } 
      else { res.render('logreg', {
        title: 'Вход', 
        error: 'Пароль не верный'
        })
      }
    } else {
	    var user = new User({username:username,password:password})
      user.save(function(err,user){
        if(err) return next(err)
          req.session.user = user._id
          res.redirect('/')
      })
    }
  })
});

/* logout */
router.post('/logout', function(req, res, next) {
  req.session.destroy()
  res.locals.user = null
  res.redirect('/')
});

module.exports = router;
