/**
 * Created by umair on 4/23/16.
 */

var express = require('express');

var bookRouter = express.Router();


var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayench Tolstoy',
        read: false
    },
    {
        title: 'Les Miserables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        read: true
    }
];

bookRouter.route('/')
    .get(function (req, res) {
        res.render('books',
            {
                title: "Books",
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
                books: books
            });
    });

bookRouter.route('/single')
    .get(function (req, res) {
        res.send('Hello Single Book');
    });



module.exports = bookRouter;