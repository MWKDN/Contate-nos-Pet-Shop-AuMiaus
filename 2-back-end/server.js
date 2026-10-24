// 1. Importação das bibliotecas necessárias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// 2. Inicialização da aplicação Express
const app = express();
const PORT = process.env.PORT || 3000;

// 3. Middlewares (Configurações intermediárias)
app.use(cors()); // Permite que o Front-End se comunique com este Back-End
app.use(express.json()); // Permite que o servidor entenda dados enviados no formato JSON

// 4. Conexão com o banco de dados MongoDB
const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
if (!mongoUri) {
	console.error('A variável MONGODB_URI não foi definida no arquivo .env');
} else {
	mongoose.connect(mongoUri)
		.then(() => console.log('Conectado ao MongoDB com sucesso!'))
		.catch((erro) => console.error('Erro ao conectar ao MongoDB:', erro));
}

// 5. Definição do Esquema (Schema) e Modelo (Model) para os Contatos do Pet Shop
const ContatoSchema = new mongoose.Schema({
	nome: { type: String, required: true },
	email: { type: String, required: true },
	telefone: { type: String, required: true },
	mensagem: { type: String, required: true },
	dataCriacao: { type: Date, default: Date.now }
});

const Contato = mongoose.model('Contato', ContatoSchema);

// 6. Rota POST para receber os dados do formulário e salvar no banco de dados
app.post('/api/contatos', async (req, res) => {
	try {
		const { nome, email, telefone, mensagem } = req.body;

		// Cria um novo documento com os dados recebidos
		const novoContato = new Contato({
			nome,
			email,
			telefone,
			mensagem
		});

		// Salva no banco de dados MongoDB
		await novoContato.save();

		// Responde ao Front-End com sucesso (Status 201 = Criado)
		res.status(201).json({ mensagem: 'Salvo com sucesso!' });
	} catch (erro) {
		console.error('Erro ao salvar contato:', erro);
		res.status(500).json({ erro: 'Erro interno ao salvar no banco de dados.' });
	}
});

// 7. Inicialização do servidor na porta 3000
app.listen(PORT, () => {
	console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});