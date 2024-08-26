const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

// Importar rotas
const usuarioRotas = require('./rotas/usuarioRotas');
const clienteRotas = require('./rotas/clienteRotas');
const pedidoRotas = require('./rotas/pedidoRotas');
const estoqueRotas = require('./rotas/estoqueRotas');
const financeiroRotas = require('./rotas/financeiroRotas');

// Middleware
app.use(express.json());  // Para parsear JSON
app.use(cors());          // Para permitir requisições de diferentes origens
app.use(helmet());        // Para adicionar segurança básica ao cabeçalho HTTP

// Rotas
app.use('/usuarios', usuarioRotas);
app.use('/clientes', clienteRotas);
app.use('/pedidos', pedidoRotas);
app.use('/estoque', estoqueRotas);
app.use('/financeiro', financeiroRotas);

// Rota de teste
app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Controle de Restaurante!');
});

// Exportar o app para uso no index.js
module.exports = app;
