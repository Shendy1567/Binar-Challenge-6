'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserHistory.belongsTo(models.UserGame, {
        constraints: false,
        foreignKey: "userGameId",
      });
    }
  }
  UserHistory.init({
    userGameId: DataTypes.INTEGER,
    score: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserHistory',
  });
  return UserHistory;
};