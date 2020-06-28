const { Service } = require('feathers-sequelize');

exports.Users = class Users extends Service {
    create (datas, params) {
        datas.id = Number(new Date().getTime().toString().slice(2))
        return super.create(datas, params);
    }
};
