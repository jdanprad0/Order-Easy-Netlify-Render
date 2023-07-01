const { MongoClient } = require("mongodb");

// criando um novo cliente do banco de dados
const client = new MongoClient(process.env.MONGO_URL);

// conectando ao banco de dados
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Conectado ao banco de dados MongoDB");

    return client;
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados MongoDB:", error);
    throw error;
  }
}

module.exports = { connectToDatabase, client };
