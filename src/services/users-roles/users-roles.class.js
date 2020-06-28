const { Service } = require('feathers-sequelize');

exports.UsersRoles = class UsersRoles extends Service {
    create (datas, params) {
        datas.id = params.users.id
        return super.create(datas, params);
    }
};
