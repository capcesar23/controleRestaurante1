const sequelize = require('./src/configuracao/banco-dados');

async function testarConexao() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados foi bem-sucedida.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
}

testarConexao();
