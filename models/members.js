module.exports = (sequelize, DataTypes) => {
    var Members = sequelize.define('member', {
        member_id : {
            /* column attributes */
            type : DataTypes.STRING(20),
            primaryKey : true,
            allowNull : false,
            validate: {
                isEmail: true
            },
        },
        member_pw : {
            type : DataTypes.STRING(100),
            allowNull : false,
        }
    });

    return Members;
}