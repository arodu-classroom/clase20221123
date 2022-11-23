var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/view', function(req, res, next) {
  res.send('<h2>perfil del usuario</h2>');
});

module.exports = router;
