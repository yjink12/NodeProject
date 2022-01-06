var router = require('express').Router();
var service = require('../articles/articles.service');
const models = require('../../models');
const passport = require('passport');
const auth = require('../../passport/auth');

//로그인 화면 연결 Get/login
router.get('/', async (req, res) => {
    let message = "";
    //req.session에 message => passport가 로그인 실패 메세지 담아줌
    if(req.session.message != undefined){
        message = req.session.messages;
    }
    //메세지까지 로그인화면으로
    res.render('login', {title: '로그인', message: message});
});

//로그인
router.post('/signin', passport.authenticate('local', {
    successRedirect: '/', //성공 -> 메인 
    failureRedirect: '/login', //실패 -> 로그인
    failureMessage: true 
}));


//로그아웃
router.get('/out', async (req, res) => {
    req.logOut();
    res.render('login', {title: '로그아웃', message: '로그아웃 성공'});
})


//회원가입 페이지
router.get('/join', (req, res) => {
    res.render('join', {title: 'Join'});
});
//회원 정보 DB
router.post('/join', service.create);
//중복 확인
router.post('/join/check', service.show);

module.exports = router;