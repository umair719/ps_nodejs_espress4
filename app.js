/**
 * Created by umair on 4/2/16.
 */
'use strict';

// Load Express and set server to listen on PORT 5000
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

// Default Navigation for the page
var nav = [
    {
        Link: '/Books',
        Text: 'Book'
    },
    {
        Link: '/Authors',
        Text: 'Author'
    }
];

// Routes
var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authorRouter = require('./src/routes/authorRoutes')(nav);


// URL definition for Admin Router
app.use('/Books', bookRouter);
app.use('/Authors', authorRouter);
app.use('/Admin', adminRouter);

// Load Views
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index',
        {
            title: "Hello from render",
            nav: [
                {
                    Link: '/Books',
                    Text: 'Books'
                },
                {
                    Link: '/Authors',
                    Text: 'Authors'
                }
            ],
            list: ['a', 'b']
        });
});

app.listen(5000, function (err) {
    console.log('running server on port ' + port);
});