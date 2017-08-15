var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var List = require('../models/List.js');


/* READ list. */
router.get('/', function(req, res, next) {
    List.find(function (err, list) {
        if (err) return next(err);
        res.json(list);
    });
});


// /* CREATE list item */
// router.post('/', function(req, res, next) {
//     List.create(req.body, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

module.exports = router;