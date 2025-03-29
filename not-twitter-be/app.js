var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const {config} = require('./config.secrets')

var messagesRouter = require('./routes/api_v1/messages');
var authRouter = require('./routes/api_v1/auth');

var app = express();

// various middlewares
// logs HTTP requests to the console
app.use(logger('dev'));
// parses HTTP requests with JSON payloads
app.use(express.json());
// parses HTTP requests with URL-encoded data
app.use(express.urlencoded({ extended: false }));
// parses cookies
app.use(cookieParser());
// serves static files
// app.use(express.static(path.join(__dirname, 'public')));

// express-session middleware
app.use(session({
    secret: config.session.secret,
    resave: false,
    saveUninitialized: false,
    name: 'nottwitter',
    cookie: { 
        secure: false, // for production, use secure: true with HTTPS                
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 } 
         
}));

app.use('/api/v1/messages', messagesRouter);
app.use('/api/v1/auth', authRouter);

module.exports = app;
