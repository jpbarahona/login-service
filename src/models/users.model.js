// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name:{
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: true
    },
    profilePicture:{
      type: DataTypes.STRING,
      allowNull: true
    },
    active:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    dateOfBirth:{
      type: DataTypes.DATE,
    },
    jobTitle:{
      type: DataTypes.DATE,
    },
    googleId: { type: DataTypes.STRING },
  
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  users.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/

    users.hasOne(models.users_roles)
  };

  return users;
};
