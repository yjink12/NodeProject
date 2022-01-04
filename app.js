var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* Sequelize 객체 만들기, db 연결 */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/* sequelize 객체 */
const sequelize = require('./models').sequelize;

var app = express();

/*db connect */
sequelize.sync({force: false})
        .then(()=>{
            console.log('db success');
        })
        .catch((err)=>{
            console.log(err);
        });

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

app.get("/login", (req, res)=>{
  res.render("login", {});
});

// app.get("/test", (req, res)=>{
//     res.render("test1", { list : rows });
// });

/*
http server
listen(port, function())
*/
app.listen(3000, () =>{
  console.log("server running....");
});

module.exports = app;