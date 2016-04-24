/**
 * Created by umair on 4/24/16.
 */

var express = require('express');

var authorRouter = express.Router();

var router = function (nav) {
    var authors = [
        {
            name: "Lev Nikolayevich Tolstoy",
            bio: "Leo Tolstoy, Tolstoy also spelled Tolstoi, Russian in full Lev Nikolayevich, Graf (count) Tolstoy (born August 28 [September 9, New Style], 1828, Yasnaya Polyana, Tula province, Russian Empire—died November 7 [November 20], 1910, Astapovo, Ryazan province) Russian author, a master of realistic fiction and one of the world’s greatest novelists.",
            books: [1]

        },
        {
            name: "Victor Hugo",
            bio: "Victor Hugo, in full Victor-Marie Hugo (born Feb. 26, 1802, Besançon, France—died May 22, 1885, Paris) poet, novelist, and dramatist who was the most important of the French Romantic writers. Though regarded in France as one of that country’s greatest poets, he is better known abroad for such novels as Notre-Dame de Paris (1831) and Les Misérables (1862).",
            books: [2]
        }
    ];

    authorRouter.route('/')
        .get(function (req, res) {
            res.render('authorListView', {
                    title: "Authors",
                    nav: nav,
                    authors: authors
                }
            );
        });
    
    return authorRouter;
};

module.exports = router;