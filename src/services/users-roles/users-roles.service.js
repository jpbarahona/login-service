// Initializes the `users-roles` service on path `/users-roles`
const { UsersRoles } = require('./users-roles.class');
const createModel = require('../../models/users-roles.model');
const hooks = require('./users-roles.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users-roles', new UsersRoles(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users-roles');

  service.hooks(hooks);
};
