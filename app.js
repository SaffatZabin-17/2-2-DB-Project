/*
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
*/


const express = require('express');
const app = express();
const models = require('./models/students');
const router = express.Router();
const database = require('./models/databaseConnect');
const model = require('./models/course');

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
    try {
        await database.startup()
        console.log(`Server started on ${PORT}`)
    } catch (error) {
        console.log('Error starting the database')
        process.exit(1)
    }
})

let result = models.getUserByID(11);
result.then(function (result) {
    console.log(result);
})

result = model.getAllCourse();
result.then(function (result){
    console.log(result);
})
//models.insertAccountIntoDB(15, 'Afif Hasan', 'afif.hasan@gmail.com', 'password15', 'C://User/Downloads/Imgae15.png');
