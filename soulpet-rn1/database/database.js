// database = arquivo de conexão com o banco de dados. Ele vai ler as variáveis de ambiente e tentar conectar

const { Sequelize } = require("sequelize");

// Criamos o objeto de conexão
const connection =  new Sequelize(
    process.env.DB_NAME, // nome reservado para o database
    process.env.DB_USER, //usuario reservado para conexão
    process.env.DB_PASSWORD, // Senha para acesso
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    }
);

// Estabelecer conexão usando o objeto
async function authenticate(connection) {
    // Tentar estabelecer conexão com o banco de dados
    connection.authenticate(); 
    try {
        await connection.authenticate();
        // Tenatr estabelecer conexão (usar as informções passadas acima)
        console.log("Conexão estabelecida com sucesso");
    } catch (err) {
        // err = objeto que guarda detalhes sobre o erro que aconteceu
        console.log("Um erro inesperado aconteceu", err);
    }
}

module.exports = {connection, authenticate};