var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* Sequelize 객체 만들기, db 연결 */
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

/* sequelize 객체 */
const sequelize = require('./models').sequelize;

/* passport */
const passport = require('passport');
const passportConfig = require('./passport');

var app = express();

/*db connect */
sequelize.sync({})
        .then(()=>{
            console.log('DB connect success');
        })
        .catch((err)=>{
            console.log(err);
        });

// view engine setup
app.set('views', path.join(__dirname, 'views')); //view 화면파일 폴더 지정
app.set('view engine', 'ejs'); //pug 보다는 ejs

app.use(logger('dev'));
//response 와 관련된 parser
app.use(express.json());
//추후에 payload 사이즈에 따라, 옵션 지정 가능
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//정적인 소스들 경로 public으로 기본지정

app.use(express.static(path.join(__dirname, 'public')));

//js css 파일 경로 잡아주기
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));
app.use('/dist', express.static(path.join(__dirname, '/dist')));

//세션 정의(passport)
//express-session
app.use(session({
  secret: '#abcdeffff$',
  resave: false,
  rolling: true,
  saveUninitialized: true,
  cookie: {    
    maxAge: 1000 * 60 * 60, //1시간
    httpOnly: true
  }
}));

/* passport session 기능 사용*/
app.use(passport.initialize());
/* req.session 객체에 passport 정보 저장 */
app.use(passport.session());

/* passport config 지정한 부분에 passport 주입 */
passportConfig(passport);

//안씀
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

//라우팅
require('./routes/index')(app);

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
