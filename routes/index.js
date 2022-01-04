// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

module.exports = (app) => {
  //host/login => login 폴더의 index로 자동 매핑
  app.use('/login', require('./login'));
  app.use('/articles', require('./articles'));

};
