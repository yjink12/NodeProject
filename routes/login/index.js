var router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login', {title: 'Login'});
});

module.exports = router;