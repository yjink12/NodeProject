var router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'testtest'});
});

module.exports = router;