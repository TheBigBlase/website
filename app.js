:ar createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const chalk = require('chalk');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fuckRouter = require('./routes/fuck');
var ip, status;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var idk = logger(function (tokens, req, res) {
  ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  status = tokens.status(req, res);
  if(status == 404) {
    return [
    tokens.method(req, res),
    tokens.url(req, res),
	chalk.red(status),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
  ].join(' '); }

  else if(ip== "46.193.161.105") { 
	  return [
		tokens.method(req, res),
		tokens.url(req, res),
		chalk.green(status),
		tokens.res(req, res, 'content-length'), '-',
		tokens['response-time'](req, res), 'ms',
		chalk.blue("Rog Request")
	  ].join(' ');  
}
});

app.use(idk);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: 'http://bigblase.xyz'}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fuck', fuckRouter);

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
  res.render('error');
});

module.exports = app;
