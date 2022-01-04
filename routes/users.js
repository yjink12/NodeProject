var express = require('express');
var router = express.Router();
let {Member} = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
    /* find() : record 하나 조회해 값 가져오는 함수(select) */
    // Member.find({where : {id:1}})
    //     .then((member) => {
    //         res.render('test1', {
    //             title: 'Express!',
    //             member_id : member.member_id
    //         });
    //     })
});

module.exports = router;
