import { Model, Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';
import { threadId } from 'worker_threads';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave');
  }
}

export default User;
