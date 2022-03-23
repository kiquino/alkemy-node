var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jsonwebtoken = require('jsonwebtoken');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var disneyRouter = require('./routes/disney');
var authRouter = require('./routes/auth');
var CharacterRouter = require('./routes/api/characters');
var moviesRouter = require('./routes/api/movies');

const {
  timeLog
} = require('console');
const {
  Server
} = require('http');

var app = express();

require('./db');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let secured = async (req, res, next) => {
  try {
    let token = req.cookies.token;

    if (token) {
      let payload = jsonwebtoken.verify(token, 'secretcodesh');
      req.user = payload;

      next();
    }
  } catch (error) {
    console.log(error + "falta token")
  }
}


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/disney', disneyRouter);
app.use('/auth', authRouter);
app.use('/api/characters', secured, CharacterRouter);
app.use('/api/movies', secured, moviesRouter);



app.all('/secret', function (req, res, next) {

  console.log(`shh...Ti's secret...`);
  next();

})




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;