/*Carregar a  biblioteca do mysql12
promise adiciona os recursosnativos
do async e await para o MySql, ou seja
ele agarda a resposta do baco para finalizar */
const mysql = require('mysql2/promise')

//Configura a conexão com o banco de dados
const conexaoBanco = mysql.createPool({
    host: '10.87.100.6',//Servidor mySql da escola
    user: 'aluno',
    password: 'Senai1234',
    database: 'dgasparlocadora',
    waitForConnections: true //Aguarda confirmação

});

/* Exporta o objeto "conexaoBanco" e deixar visivel
em outras partes do projeto */
module.exports = conexaoBanco