const models = require('../../models');

// exports.index = async (req, res) => {
//     let rows = await models.member.findAll();
//     res.status(200).json({result: 'success', data: rows});
// }

exports.create = async (req, res) => {
    try{
        let rows = await models.member.create({
            member_id : req.body.email,
            member_pw : req.body.password, 
         });

        res.redirect('/login');
    }catch(err){
        if(err.message === 'Validation error'){
           res.render('/join', {message: "fail"})
        }else{
            res.status(500).json({result: false, message: "fail"})
        }
    }
}

exports.show = async (req, res) => {
    try{
        let rows = await models.member.findOne({
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