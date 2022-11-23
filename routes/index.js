var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let nombre = "Juan"
  let cedula = "12312321"

  res.render('index', {
    title: 'UNERG',
    name: nombre,
    cedula,
  });
});

router.get('/otro', function(req, res, next) {
  let nombre = "Maria"
  let cedula = "543434"

  res.render('index', {
    title: 'UNERG',
    name: nombre,
    cedula,
  });

  router.post('/save', function(req, res, next) {
    console.log(req.body.nombre);

    res.send("Guardado usuario " + req.body.nombre)
  });

});

module.exports = router;
