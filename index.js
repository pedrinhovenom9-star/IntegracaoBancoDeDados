const express = require("express")

/**
 * Carregar as rotas do Gênero
 * O comando ./ usa a pasta atual 
 */
const rotasGenero = require('./api/generoRotas')

 /**
  * Construir o objeto do express
  */
 const backend = express();

 /**
  * Configurar o Backend para usar JSON
  */
 backend.use(express.json());
 
 /**
  * Personalizar um caminho para assesar as rotas do Gênero 
  * nesse caso, todas as rotas do Gênero ficam dentrodo caminho /genero
  */
 backend.use('/genero', rotasGenero)

/**
 * Iniciar o Backend
 */
 backend.listen(3000, () => {
    console.log("Backend iniciado com sucesso!");
 })

