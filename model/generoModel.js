/** O model vai ser responsavel pelos comandos SQL -
 * Importar a configuraçao de conexão MySQL
 * o ../ Volta uma pasta
 */
const banco = require('../config/banco')

//Criar um objeto chamado Genero, dentro dele estaram os atributos com os comandos SQL
const Genero = {
    /**Oatributo cadastrar será uma função
   
    * o "nome" é parâmetro da função
    */
    cadastrar: async (nome) => {
        const sql = "INSERT INTO genero (nome)" + "VAULES (?);";
        /** Precisamos passar o parâmetro nome para o
         * método querry() recebem um comando SQL e os
         *  parâmetos da ? (SE HOUVER)
         * */

        const [resultado] = await banco.query(sql, [nome]); 
        return resultado.insertId
    },
    buscarTodos : async () => {
        const sql = "SELECT * FROM genero ORDER BY nome ";
        const [resultado] = await banco.query(sql);
        /**O retorno nesse caso é o própio resultado
         * ou seja, todas as linhas do SELECT
         */
        return resultado;
    },
    /**Afução atualizar irá receber o nome do gênero
     * e o id do genero sera atualizado 
     */
    atualizar: async (nome, id) => {
        const sql = "UPDATE genero SET nome =? WHERE id =?";
        const [resultado] = await banco.query(
            sql, [nome, id]
        );
        /**Para os comandos deUPDATE e DELETE retornamos 
         * oaffectedRows (quantidade de linahs atualizadas)
         * o teste > 0 verifica de form alteradas ao menos 
         * 1 linha, se for retorna verdadeiro
         */
        return resultado.affectedRows > 0;
    },
    apagar: async (id) => {
        const sql = "DELETE FROM genero WHERE id=?";
        const [resultado] = await banco.query(sql, [id]);
        return resultado.affectedRows > 0;
    },
    buscarPorNome: async (nome) => {
        const sql = "SELECT id FROM genero WHERE id=?";
        const [resultado] = await banco.query(sql, [nome]);
        return resultado;
    }

}
module.exports = Genero;