module.exports = (sequelize, DataTypes) => {
    return sequelize.define('member', {
        member_id : {
            /* column attributes */
            type : DataTypes.STRING(20),
            primaryKey : true,
        },
        member_pw : {
            type : DataTypes.STRING(100),
            allowNull : false,
        }
    });
}