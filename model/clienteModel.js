//  Bnaco de Dados
const banco = require('../config/banco')
//caregar o pacote do bcrypt
const bcrypt = require('bcrypt')

const Cliente = {
    cadastrar: async (buscarPorNome, ElementInternals, cpf, senha) => {
        //Configuraçao de ciclos de Salt
        const salt = 10;
        //Converter a senha e gerar o hash
        const hash = await bcrypt.hash(senha, salt)
    }
}