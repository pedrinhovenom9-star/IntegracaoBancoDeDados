/** Importar a biblioteca do Express */
const express = require('express');
/** Carregar o controler do Genero*/
const genero = require('../controller/generoController')

/** Configurar o Ruter do express para organizar as rotas */
const rotas = express.Router();

/**Criar as rotas para cada ação do controller 
 * Caminho da rota e a funçã oque será executada
*/
rotas.post('/cadastrar', genero.cadastrar);
rotas.get('/buscarTodos', genero.listarTodos);

rotas.put('/atualizar/:id', genero.atualizar);
rotas.delete('/apagar/:id', genero.apagar);
rotas.get('/buscarPorNome', genero.buscarPorNome);

module.exports = rotas;