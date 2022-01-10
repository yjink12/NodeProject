var router = require('express').Router();
const service = require('../articles/articles.service');
const auth = require('../../passport/auth');

//예약 main-page
//회의실 정보 받아오기, ID 받아오기
router.get('/', auth.isAuthenticatedPage, service.showInfo);

//예약 정보 insert
router.post('/add', service.reserveRoom);

//예약 정보 delete
router.delete('/del/:id', service.delReserve);

//예약 정보 받아서 달력에 표시
router.get('/calendar', auth.isAuthenticatedPage, service.showReserveInfo);

//회의실 insert
router.post('/create/:name', service.createRoom);

module.exports = router;