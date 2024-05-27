import {Sequelize} from 'sequelize'

const sequelize = new Sequelize('almacen', 'root', 'myMiguel22.SQL$', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  });

  export default sequelize;