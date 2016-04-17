/**
 * Created by umair on 4/2/16.
 */
'use strict'

var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));

app.set('views', './src/views');

var bookRouter = express.Router();

app.set('view engine', 'ejs');

bookRouter.route('/')
    .get(function (req, res) {
        res.send('Hello Books');
    });

bookRouter.route('/single')
    .get(function (req, res) {
        res.send('Hello Single Book');
    });

app.use('/Books', bookRouter);

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


app.get('/books', function (req, res) {
    res.send("hello books");
});

app.listen(5000, function (err) {
    console.log('running server on port ' + port);
});

