/* 
    passport config 
    passport-local
        : session 로그인(server-side-render)
    로그인 전략
*/
const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');

module.exports = (passport) => {
    //session 이 passport 인증 통과시
    //serializeUser : req.session 객체에 어떤 데이터 저장할지 선택
    //                 사용자 정보 객체 세션에 아이디로 저장
    passport.serializeUser((user, done)=>{
        console.log('serialize session');
        // null -> error 발생시 사용
        done(null, user.id);
    });

    //deserializeUser : 요청시 실행됨, 
    //                  passport.session() 이 deserializeUser 호출
    // serializeUser 에서 id 받아서 db 사용자 정보 조회
    passport.deserializeUser( async (id, done) => {
        console.log('deserialize session');
        let user = await models.member.findOne({
            where : {member_id : id}
        });
        done(null, user);
    });

    //local 전략 정의
    //serialize 는 session 이나 token 모두 동일
    passport.use('local', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        session : true
    }, async (email, password, done) => {

        //DB
        let user = await models.memeber.findOne({
            where: {member_id: email, member_pw: password}
        });

        if(!user){
            return done(null, false, {message: '이메일, 비밀번호 확인!'});
        }else {
            return done(null, user);
        }
    }));
}
