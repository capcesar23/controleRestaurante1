const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carregar variáveis de ambiente do .env

// Log das variáveis de ambiente
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

//copnfiguração do Sequelize
const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
};

const startServer = () => {
  const porta = process.env.PORT || 3000;
  app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
  });
};

testConnection();

module.exports = sequelize;

