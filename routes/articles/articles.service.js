const models = require('../../models');

/* 회원관련 */
// exports.index = async (req, res) => {
//     let rows = await models.member.findAll();
//     res.status(200).json({result: 'success', data: rows});
// }

exports.create = async (req, res) => {
    try{
        let rows = await models.y_member.create({
            member_id : req.body.email,
            member_pw : req.body.password, 
         });
        console.log(rows);

        res.redirect('/login');
        res.status(200).json({result: 'success', data: rows});
    }catch(err){
        // if(err.message === 'Validation error'){
        //    res.render('/join', {message: "fail"})
        // }else{
            res.status(500).json({result: false, message: "fail"})
        // }
    }
}

exports.show = async (req, res) => {
    try{
        let rows = await models.y_member.findOne({
            where: {member_id: req.body.email}
        });
        if(rows = null){
            
        }
    }catch(err){
        res.status(500).json({result: false, message: "fail"})
    }
}

// exports.update = async (req, res) => {
//     let rows = await models.member.update({ member_pw : '1212'}, {where: {member_id : req.params.id}});
//     res.status(200).json({result: 'success', data: rows});
// }
// exports.destroy = async (req, res) => {
//     let rows = await models.member.destroy({
//         where: {member_id : req.params.id}
//     });
//     res.status(200).json({result: 'success', data: rows});
// }

exports.createRoom = async (req, res) => {
    try{
        let rows = await models.y_room.create({
            room_name : req.params.name
         });
        console.log(rows);

        res.status(200).json({result: 'success', data: rows});
    }catch(err){
        res.status(500).json({result: false, message: "fail"})

    }
}

exports.showInfo = async (req, res) => {
    try{
        console.log(req.user.member_id);
        let rows = await models.y_room.findAll();
        
        res.render('reserve', {list: rows, title: '예약', id: req.user.member_id});
        //res.status(200).json({result: 'success', data: rows, title: 'RRRRRRR'});
    }catch(err){
        res.status(500).json({result: false, message: "fail"})
    }
}

exports.reserveRoom = async (req, res) => {
    try{
        console.log(req.body.reserve_date);
        //예약 정보가 있는지 확인
        let check = await models.y_reserve.findOne({
            where : {
                member_id : req.body.member_id,
                room_no : req.body.room_no,
                reserve_date : req.body.reserve_date,
                start_time : req.body.start_time,
                end_time : req.body.end_time,        
            }
        });

        console.log('null-check=======>'+check);
        if(null == check){
            let rows = await models.y_reserve.create({
                member_id : req.body.member_id,
                room_no : req.body.room_no,
                person_num : req.body.person_num,
                reserve_date : req.body.reserve_date,
                start_time : req.body.start_time,
                end_time : req.body.end_time
            });

            res.status(200).json({result: 'success', data: rows});
        }else{
            res.status(500).json({result: false, message: "fail"})
        }

    }catch(err){
        res.status(500).json({result: false, message: "fail"})
    }
}

exports.showReserveInfo = async (req, res) => {
    try{
        //console.log(req.user.member_id);
        let rows = await models.y_reserve.findAll();
        
        res.status(200).json({result: 'success', data: rows});
    }catch(err){
        res.status(500).json({result: false, message: "fail"})
    }
}

exports.delReserve = async (req, res) => {
    let rows = await models.y_reserve.destroy({
        where: {member_id : req.params.id}
    });
    res.status(200).json({result: 'success', data: rows});
}