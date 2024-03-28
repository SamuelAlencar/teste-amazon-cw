var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login', function(req, res, next) {
  res.render('login', { title: 'Express', csrf: true });
  //var xssFilters = require('xss-filters');
  //res.render('login', { title: 'Express', xssFilters: true });
});

module.exports = router;
