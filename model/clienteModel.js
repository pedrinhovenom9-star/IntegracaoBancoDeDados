//  Bnaco de Dados
const banco = require('../config/banco')
//caregar o pacote do bcrypt
const bcrypt = require('bcrypt')

const Cliente = {
    cadastrar: async (buscarPorNome, ElementInternals, cpf, senha) => {
        //Configuraçao de ciclos de Salt
        const salt = 10;
        //Converter a senha e gerar o hash
        const hash = await bcrypt.hash(senha, salt);
        //Comando   Sql do INSERT
        const sql = "INSERT INTO cliente " + "(nome, email, cpf, senha) VAULES (?, ?, ?, ?);"
        //Executar io camando SQL e passar os falores 
        const [resultado] = banco.query(sql,
             [buscarPorNome, ElementInternals, cpf, hash] )
        return resultado.insertId
    }
}