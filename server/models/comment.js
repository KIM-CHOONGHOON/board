'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.comment.belongsTo(models.user);
      models.comment.belongsTo(models.board);
    }
  }
  comment.init({
    description: DataTypes.STRING,
    boardId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'board',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};