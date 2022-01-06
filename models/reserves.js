module.exports = (sequelize, DataTypes) => {
    var Reserves = sequelize.define('reserve', {
        rsv_no : {
            /* column attributes */
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        member_id : {
            type : DataTypes.STRING(20),
            allowNull : false,
        },
        room_name : {
            type : DataTypes.STRING(100),
            allowNull : false,
        }
    });

    return Reserves;
}