const Usuario = require('../modelos/usuarioModelo');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.criarUsuario = async (req, res) => {
    try {
        const { nome, email, senha, nivelAcesso } = req.body;
        const senhaHash = await bcrypt.hash(senha, 10);

        const usuario = await Usuario.create({
            nome,
            email,
            senha: senhaHash,
            nivelAcesso
        });

        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Outros métodos de controle
