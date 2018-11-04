var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AsianConcreto' });
});
router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});
router.get('/products', function(req, res){
  res.render('products', {
    title: 'Products'
  });
});

module.exports = router;
