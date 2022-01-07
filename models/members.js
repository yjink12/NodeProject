module.exports = (sequelize, DataTypes) => {
    var Members = sequelize.define('y_member', {
        member_no : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            comment : '회원번호'
        },
        member_id : {
            /* column attributes */
            type : DataTypes.STRING(20),
            allowNull : false,
            validate: {
                isEmail: true
            },
            unique : true,
            comment : '회원아이디(이메일)'
        },
        member_pw : {
            type : DataTypes.STRING(100),
            allowNull : false,
            comment : '회원비밀번호'
        }
    }, {
        tableName : 'y_member'
    });

    return Members;
}