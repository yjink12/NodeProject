var router = require('express').Router();
var service = require('./articles.service');
const auth = require('../../passport/auth');


//restful
// 장점
// 1. 표준이다
// 2. 그래서 react admin template, python admin template 등
// 3. 웹표준을 지원하는 admin template을 사용시
// 4. 별도로 url 지정 안해줘도 알아서 갔다 붙어요.

// router.get('/', auth.isAuthenticated, service.index);
// router.post('/', service.create);
// router.get('/:id', service.show);
// router.patch('/:id', service.update);
// router.delete('/:id', service.destroy);
 
module.exports = router;