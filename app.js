const db = require('./db.js');
const mongoose = require('mongoose');
const Keyword = mongoose.model('Keyword');
const passport = require('passport');
const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/index.js');
const keywords = require('./routes/keywords.js');
const news = require('./routes/news.js');
const session = require('express-session');

function runApp() {
    app.use(express.urlencoded({ extended: false }));


    // view engine setup
    // app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'hbs');

    // enable sessions
    const sessionOptions = {
        secret: 'secret cookie thang (store this elsewhere!)',
        resave: true,
        saveUninitialized: true
    };
    app.use(session(sessionOptions));
    app.use(express.static(path.join(__dirname, 'public')));


    app.use('/', routes);
    app.use('/search', routes);
    app.use('/keywords', keywords);
    app.use('/news', news);

    app.listen(process.env.PORT, () => {
        console.log('Server is running on port 3001');  
    });
}


// app.listen(process.env.PORT || 3001);

// exports.app = app;
exports.default = runApp;