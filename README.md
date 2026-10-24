# Contate-nos — Pet Shop AuMiaus

Projeto de prática Full Stack desenvolvido para fins de estudo, como exercício de criação de um formulário de contato com HTML, CSS e JavaScript. O projeto faz parte dos estudos no curso TI do zero ao pro.

## Aviso

O endereço de API usado pelo formulário em `1-front-end/script.js` (`https://exemplo.com/api/contato`) é fictício. O formulário não envia mensagens para um serviço real enquanto esse endereço não for substituído por uma API configurada.

O projeto também inclui um backend de demonstração em `2-back-end`, com uma rota `POST /api/contatos` que pode salvar contatos no MongoDB quando configurada. Esse backend não está hospedado nem conectado ao endereço fictício usado pelo frontend.

## Estrutura

- `1-front-end/` — página do formulário e código do navegador.
- `2-back-end/` — API de demonstração em Node.js, Express e Mongoose.

## Executar o backend localmente

1. Instale uma versão compatível do Node.js.
2. No diretório `2-back-end`, instale as dependências:

   ```bash
   npm install
   ```

3. Crie `2-back-end/.env` com a URI de uma instância MongoDB que você tenha autorização para usar:

   ```env
   MONGODB_URI=sua_uri_do_mongodb
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

Por padrão, o backend escuta em `http://localhost:3000`. A rota de demonstração é `POST http://localhost:3000/api/contatos`.

O frontend ainda aponta para o endereço fictício descrito acima; para testar o fluxo completo, configure-o para usar o backend local.

## Segurança

Não compartilhe nem publique arquivos `.env`, credenciais ou URIs com senha. O `.gitignore` na raiz exclui arquivos `.env` e diretórios `node_modules`.
