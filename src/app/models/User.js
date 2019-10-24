import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Pelada, {
      through: 'PeladaUsers',
      as: 'peladas',
      foreignKey: 'userId',
    });
  }
}

export default User;