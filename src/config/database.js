const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});
function conexaoDb() {
  try {
    sequelize.authenticate();
    // eslint-disable-next-line no-console
    console.log('Conexão com o banco ok.');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Conexão com o banco nok.');
  }
}
conexaoDb();

module.exports = sequelize;
