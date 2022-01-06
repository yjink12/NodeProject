module.exports = (sequelize, DataTypes) => {
    var Rooms = sequelize.define('room', {
        room_no : {
            /* column attributes */
            type : DataTypes.STRING(20),
            primaryKey : true,
        },
        room_name : {
            type : DataTypes.STRING(100),
            allowNull : false,
        }
    });

    return Rooms;
}
