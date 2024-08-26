const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controladores/usuarioControlador');

router.post('/', usuarioControlador.criarUsuario);
// Outras rotas

module.exports = router;
