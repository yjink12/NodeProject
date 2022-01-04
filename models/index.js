/*
    index.js
    1. config.json에 있는 DB 값으로 새로운 Sequelize 객체 생성
    2. db 객체에 넣어줌
    models/index.js 로 sequelize 와 user 에 접근 가능
*/
let path = require('path');
let Sequelize = require('sequelize');

let env = process.env.NODE_ENV || 'development';
let config = require(path.join(__dirname+'../../config/config.json'))[env];
let db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Member = require('./member')(sequelize, Sequelize);

module.exports = db;