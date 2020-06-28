const users = require('./users/users.service.js');
const roles = require('./roles/roles.service.js');
const usersRoles = require('./users-roles/users-roles.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(roles);
  app.configure(usersRoles);
};
