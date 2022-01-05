const auth = require('../passport/auth');

module.exports = (app) => {
  //host/login => login 폴더의 index로 자동 매핑
  app.use('/login', require('./login'));

  app.use('/articles', require('./articles'));

  app.use('/', auth.isAuthenticatedPage, (req, res) => {
    res.render('login',{title: 'main'});
  });
};
