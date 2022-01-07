module.exports = (sequelize, DataTypes) => {
    var Rooms = sequelize.define('y_room', {
        room_no : {
            /* column attributes */
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            comment : '회의실 번호'
        },
        room_name : {
            type : DataTypes.STRING(100),
            allowNull : false,
            comment : '회의실명'
        }
    }, {
        tableName : 'y_room'
    });

    return Rooms;
}
