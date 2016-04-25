var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Unreasonable' });
});

router.get('/trial-project', function(req, res, next) {
  res.render('trial', { title: 'Unreasonable' });
});

module.exports = router;
