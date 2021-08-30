const mongoose = require('../database');

const AlunosSchema = new mongoose.Schema({

    nome: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },

    senha: {
        type: String,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    respostas: [{
        type: String,
    }],

    dataDoTeste: {
        type: Date,
        default: Date.now,
    },
    aprovado: {
        type: Boolean,
        default: false,
    },

    nota: {
        type: String,
        default: 0,
    },

});

const Alunos = mongoose.model('Alunos', AlunosSchema);

module.exports = Alunos;