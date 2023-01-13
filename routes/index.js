var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect')
var checkAuth = require("./../middleware/checkAuth.js")

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

  db.query(`SELECT * FROM user WHERE user.username = '${username}'`, (err, users) => {
    if(err) return next(err)
    if(users.length > 0){ //length - возвращает число элементов в массиве, или длину строки
      var user = users[0];
      if(password == user.password){
        req.session.user = user.user_id
        res.redirect('/')
      } else { res.render('logreg', {
        title: 'Вход',
        error: 'Пароль не верный'
        })
      }
    } else {
      db.query(`INSERT INTO user (username, password) VALUES ('${username}', '${password}')`, (err,user) =>{
        if (err) return next(err)
        req.session.user = user.user_id
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
