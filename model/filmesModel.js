const banco = require('../config/banco')

const Filme = {

    cadastrar: async (nome) => {
        const sql = "INSERT INTO filme (titulo, ano_lancamento, duracao, sinopse, genero_id)" + "VAULES (?, ?, ?, ?, ?);";
        /** Precisamos passar o parâmetro nome para o
         * método querry() recebem um comando SQL e os
         *  parâmetos da ? (SE HOUVER)
         * */

        const [resultado] = await banco.query(sql, [titulo], [ano_lancamento], [duracao], [sinopse], [genero_id]); 
        return resultado.insertId
    },
    buscarTodos : async () => {
        const sql = "SELECT * FROM filme ORDER BY nome ";
        const [resultado] = await banco.query(sql);
        /**O retorno nesse caso é o própio resultado
         * ou seja, todas as linhas do SELECT
         */
        return resultado;
    },
    atualizar: async (nome, id, ano_lancamento, duracao, ) => {
        const sql = "UPDATE genero SET nome =? WHERE id =?";
        const [resultado] = await banco.query(
            sql, [nome, id, ano_lancamento]
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
module.exports = Filme;

