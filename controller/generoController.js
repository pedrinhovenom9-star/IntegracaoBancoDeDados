//Importar o Model do Genero
const Genero = require("../model/generoModel");

//Criar um objeto do Controller com os atributos
const generoController = {
  //Lógica da reqisição de cadastro
  cadastrar: async (req, res) => {
    //Recuperar o nome da requisição
    const { nome } = req.body;
    //Validar o valor do nome
    if (!nome || nome.length < 3) {
      //Código 400 - usuário valor errado
      return res.status(400).json({
        erro: "Nome precisa de ao menos 3 caracteres",
      });
    }
    //Se passar pelo if então o nome está ok
    try {
      /**Chamart o atributo / função cadastrar do Model
       * O cadastrar do Model retorna o ID da linha
       */
      const idGenero = await Genero.cadastrar(nome);
      /** Exibir como resposta o ID gerado e nome */
      return res.status(200).json({
        id: idGenero,
        nome: nome,
      });
    } catch (error) {
      /** Erro 500  Erro do servidor */
      return res.status(500).json({
        erro: "Erro ao cadastrar",
      });
    }
  },
  listarTodos: async (req, res) => {
    try {
      const resultado = await Genero.buscarTodos();
      return res.status(200).json(resultado);
    } catch (error) {
      return res.status(500).json({
        erro: "erro ao buscar gêneros",
      });
    }
  },
  /**Artualizar - o parametro "nome" vem do body
   * Oparametro dop "id" vem da URL
   */
  atualizar: async (req, res) => {
    const { nome } = req.body;
    /** Params.id o "id" é o nome do parametro
     * que será configurado no arquivo das rotas
     */
    const id = req.params.id;
    /**Chamar o atualizar do model */
    const resultado = await Genero.atualizar(nome, id);
    /**Atualizar o model retornar verdadeiro ou falso */
    if (resultado) {
      // Verdadeiro - Atualizou 1 linha
      res.status(200).json({ resultado: "Atualizado" });
    } else {
      /**CXomando update com sucesso mas id errado
            Status 204 - Sucesso mas sem conteudo/resposta */
      res.status(204).send();
    }
  },
  apagar: async (req, res) => {
    try {
      const id = req.params.id;
      const resultado = await Genero.apagar(id);
      if (resultado) {
        res.status(200).json({ Resultado: "Removido" });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ Erro: "Erro ao apagar" });
    }
  },
  buscarPorNome: async (req, res) => {
    try {
      const { nome } = req.body;
      const resultado = await Genero.buscarPorNome(nome);
      if (!resultado) {
        res.status(404).json({ Resultado: "Gênero não encontrado" });
      }
      res.status(200).json(resultado);
    } catch (erro) {
        res.status(500).json({"Erro":"Erro ao buscar"})
    }
  },
};

module.exports = generoController;
