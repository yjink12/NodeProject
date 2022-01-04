/*
    index.js
    1. config.json에 있는 DB 값으로 새로운 Sequelize 객체 생성
    2. db 객체에 넣어줌
    models/index.js 로 sequelize 와 user 에 접근 가능
*/
const Sequelize = require('sequelize');
const con = require('../config').database;
// let env = process.env.NODE_ENV || 'development';
// let config = require(path.join(__dirname+'../../config/config.json'))[env];



let db = {};

//connection
let connection = new Sequelize(con.database, con.username, con.password, con);

db.Sequelize = connection;

//db.Member = require('./member')(sequelize, Sequelize);

module.exports = db;