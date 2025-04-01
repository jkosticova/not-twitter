var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const PgSession = require("connect-pg-simple")(session);
var pool = require('./config/db.js');
const { config } = require('./config/config.js');

var messagesRouter = require('./routes/api_v1/messages');
var authRouter = require('./routes/api_v1/auth');

require('dotenv').config()

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
app.use(
    session({
        store: new PgSession({
            pool, 
            tableName: "session", 
        }),        
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        name: config.session.cookieName,
        cookie: { 
            secure: false, // after deployment: use secure: true with HTTPS !                
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 } 
             
    })    
);    
    
        
app.use('/api/v1/messages', messagesRouter);
app.use('/api/v1/auth', authRouter);

module.exports = app;
