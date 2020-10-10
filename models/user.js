"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // relasi terhadap model profile
      user.belongsTo(models.profile, {
        as: "profile",
        foreignKey: {
          name: "profileId",
        },
      });

      // relasi terhadap model job
      user.hasMany(models.Job, {
        as: "jobs",
      });
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      profileId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
