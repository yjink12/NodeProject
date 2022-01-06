//세션 체크
exports.isAuthenticated = (req, res, next) => {    
    if(req.isAuthenticated()) return next();
    res.status(401).json({message: 'expired session'});
}
// 세션이 있으면, 메인페이지를 보여주고, 없으면 login화면으로 이동
exports.isAuthenticatedPage = (req, res, next) => {    
    if(req.isAuthenticated()) return next();     
    res.redirect('/login');
}