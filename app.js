var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
async = require('async');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mongoose = require("mongoose");
const oracleDB = require('oracledb');

const port = process.env.PORT || 3000;

var app = express();


// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});         

app.get("/", (req, res) => {
  res.redirect("index");
});


//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);
app.use('/', usersRouter);

//Express-session
app.use(session({
   secret: 'secret',
   saveUninitialized: true,
   resave: true
}));
//Passport
app.use(passport.initialize());
app.use(passport.session());

//Express validator
app.use(expressValidator({
  errorFormatter: function(param,msg,value){
    var namespace = param.split('.'),
    root = namespace.shift(),
    formParam = root;

    while(namespace.length){
      formParam += '[' + namespace.shift() + ']'; 
    }
    return{
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

//connect flash
app.use(flash());

//Global vars
app.use(function(req,res,next){
  res.locals.messages = require('express-messages')(req,res);
  next();
});


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

app.listen(3000, function () {
console.log("Express server listening on port 3000");
});


module.exports = app;
