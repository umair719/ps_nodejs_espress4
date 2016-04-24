/**
 * Created by umair on 4/23/16.
 */

var express = require('express');

var bookRouter = express.Router();

var router = function (nav) {
    var books = [
        {
            id: 0,
            title: 'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolayench Tolstoy',
            read: false
        },
        {
            id: 1,
            title: 'Les Miserables',
            genre: 'Historical Fiction',
            author: 'Victor Hugo',
            read: true
        }
    ];

    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView',
                {
                    title: "Books",
                    nav: nav,
                    books: books
                });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Books',
                nav: nav,
                book: books[id]
            });
        });
    return bookRouter;
};


module.exports = router;