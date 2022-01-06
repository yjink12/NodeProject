/*
    index.js
    1. config.json에 있는 DB 값으로 새로운 Sequelize 객체 생성
    2. db 객체에 넣어줌
    models/index.js 로 sequelize 와 user 에 접근 가능
*/
const Sequelize = require('sequelize');
const con = require('../config').db;
// let env = process.env.NODE_ENV || 'development';
// let config = require(path.join(__dirname+'../../config/config.json'))[env];
const fs = require('fs');
const path = require('path');
const baseName = path.basename(__filename);

let db = {};

//connection
let connection = new Sequelize(con.database, con.username, con.password, con);

//Model 등록 => 폴더 내의 model 파일들 db에 자동등록 스크립트
fs.readdirSync(__dirname).filter(function(file){
    console.log(file);
    return (file.indexOf('.') !== 0) && (file !== baseName); //.으로 구분 후 파일 비교
}).forEach(function(file) {     //목록 가져오고
    var model = connection['import'](path.join(__dirname, file)) //커넥션에서 import 시키고
    db[model.name]  = model; //db에 쌓기
});

//association => model 간의 관계 지정시 일괄적으로 연결
Object.keys(db).forEach(function (modelName) {   
    console.log(modelName); 
    if (db[modelName].associate) {
      db[modelName].associate(db);
    } 
});

console.log(db); 

db.sequelize = connection;

//db.Member = require('./member')(sequelize, Sequelize);

module.exports = db;