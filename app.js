var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var mongoose = require('mongoose');
var mysql2 = require('mysql2/promise');
var session = require('express-session');
var MySQLStore = require('express-mysql-session'); (session);


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var continents = require('./routes/continents');

var app = express();

var options = {
  host : 'bocg2cmeficw000b5qyo-mysql.services.clever-cloud.com',
  port: '3306',
  user : 'uqod9urhjmwdwj89',
  password : 'RuS3sRialInl5ndmIvRE',
  database: 'bocg2cmeficw000b5qyo'
};
  var connection = mysql2.createPool(options)
  var sessionStore = new MySQLStore(options, connection);
  
// view engine setup
app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'bower_components')));

app.use(session({
  secret: 'Continents',
  key: 'sid',
  store: sessionStore,
  resave: true,
  saveUninitialized: true,
  cookie: { path: '/',
    httpOnly: true,
    maxAge: 60*1000
  }
  }));
  

// var MongoStore = require('connect-mongo'); (session);
// app.use(session({
//   secret: "Continents",
//   cookie: {maxAge:60*10000},
//   resave: true,
//   saveUninitialized: true,
//   store: MongoStore.create({mongoUrl: 'mongodb://127.0.0.1:27017/allcontinents'})
// }))

app.use(function(req, res, next){
  req.session.counter = req.session.counter +1 || 1,
  next()
})

app.use(require("./middleware/createMenu"))
app.use(require("./middleware/createUser"))


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/continent', continents)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    title: 'Упс... Что-то пошло не так :(',
    picture: '/images/error.png',
    menu:[]
  });
});

// app.engine('ejs',require('ejs-locals'));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

module.exports = app;

// mongoose.connect('mongodb://127.0.0.1:27017/allcontinents')
