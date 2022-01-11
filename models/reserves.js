
module.exports = (sequelize, DataTypes) => {
    var Reserves = sequelize.define('y_reserve', {
        rsv_no : {
            /* column attributes */
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            comment : '예약번호'
        },
        reserve_date : {
            type : DataTypes.DATE, 
            allowNull : false,
            comment : '예약 날짜'
        },
        start_time : {
            type : DataTypes.TIME, 
            allowNull : false,
            comment : '이용 시작시간'
        },
        end_time : {
            type : DataTypes.TIME, 
            allowNull : false,
            comment : '이용 종료시간'
        },
        person_num : {
            type : DataTypes.INTEGER,
            allowNull : false,
            comment : '이용 인원'
        }
    }, {
        tableName : 'y_reserve'
    });

    Reserves.associate = function (models){
        models.y_reserve.belongsTo(models.y_member, {
            foreignKey : {
                name : 'member_id',
                allowNull : false
            }  
        });

        models.y_reserve.belongsTo(models.y_room, {
            foreignKey : 'room_no'
        });
    };

    return Reserves;
}