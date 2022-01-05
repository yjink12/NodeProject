const models = require('../../models');

exports.index = async (req, res) => {
    let rows = await models.member.findAll();
    res.status(200).json({result: 'success', data: rows});
}
exports.create = async (req, res) => {
    let rows = await models.member.create({
       member_id : 'yj',
       member_pw : '121812', 
    });
    res.status(200).json({result: 'success', data: rows});
}
exports.show = async (req, res) => {
    let rows = await models.member.findOne({
        where: {member_id: req.params.id}
    });
    res.status(200).json({result: 'success', data: rows});
}

exports.update = async (req, res) => {
    let rows = await models.member.update({ member_pw : '1212'}, {where: {member_id : req.params.id}});
    res.status(200).json({result: 'success', data: rows});
}
exports.destroy = async (req, res) => {
    let rows = await models.member.destroy({
        where: {member_id : req.params.id}
    });
    res.status(200).json({result: 'success', data: rows});
}