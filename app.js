/**
 * Created by umair on 4/2/16.
 */
'use strict';

var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

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

var bookRouter = require('./src/routes/bookRoutes')(nav);

var authorRouter = require('./src/routes/authorRoutes')(nav);

app.use('/Books', bookRouter);

app.use('/Authors', authorRouter);

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


// app.get('/books', function (req, res) {
//     res.send("hello books");
// });

app.listen(5000, function (err) {
    console.log('running server on port ' + port);
});