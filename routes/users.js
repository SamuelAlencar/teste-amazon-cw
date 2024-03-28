var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  const {username, password} = req.body;
  if(username === 'admin' && password === 'admin') {
   res.status(200).json({
    message: 'Login efetuado com sucesso',
   });
  //const csrf = require('csurf');
  csrfProtection.process(req, res);
  //const csrf = require('csurf');
  csrfProtection.process(req, res);
   } else {
    res.status(401).json({
      message: 'Login falhou',
    });
   }

});

router.post('/change-password', function(req, res, next) {
  const {username, oldPassword, newPassword} = req.body;

  if(username === 'admin' && oldPassword === 'admin' && newPassword === 'admin123') {
    res.status(200).json({
      message: 'Senha alterada com sucesso',
      csrf: true
    });
  } else {
    res.status(401).json({
      message: 'Senha alterada falhou',
    });
  }

}); 

module.exports = router;
