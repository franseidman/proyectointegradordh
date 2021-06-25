var createError = require('http-errors');
var express = require('express'); //REQUERIMOS EXPRESS
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session'); //REQUERIMOS SESSION
const db = require('./database/models'); //REQUERIMOS LOS MODELOS

//RUTEADORES
var indexRouter = require('./routes/index');
var profileRouter = require('./routes/profile');
var productRouter = require('./routes/product');
var registerRouter = require("./routes/register");
var loginRouter = require("./routes/login");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//SESSION 
app.use(session(
  { secret:'watch24',
    resave: false,
    saveUninitialized: true }
));

app.use(function(req, res, next){
  if(req.session.user != undefined){
    res.locals.user = req.session.user;
    return next();
  } 
  return next(); //Clave para que el proceso siga adelante.  
})

//COOKIES
app.use(function(req, res, next){
  if(req.cookies.userId != undefined && req.session.user == undefined){
    let idDeLaCookie = req.cookies.userId;
    
    db.User.findByPk(idDeLaCookie)
    .then( user => {
      req.session.user = user; 
      res.locals.user = user; 
      return next();
    })
    .catch( e => {console.log(e)})
  } else {
    return next();
  }
})

//RUTAS
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use('/', indexRouter);
app.use('/profile', profileRouter);
app.use('/product', productRouter);


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
