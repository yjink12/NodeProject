
module.exports = (sequelize, DataTypes) => {
    var Reserves = sequelize.define('y_reserve', {
        rsv_no : {
            /* column attributes */
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            comment : '예약번호'
        },
        member_id : {
            type : DataTypes.STRING(20),
            allowNull : false,
            references : {
                model: 'y_member',
                key: 'member_id'
            },
            comment : '회원아이디'
        },
        room_no : {
            type : DataTypes.INTEGER,
            allowNull : false,
            references : {
                model: 'y_room',
                key: 'room_no'
            },
            comment : '회의실 번호'
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

    return Reserves;
}