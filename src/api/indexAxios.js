const axios = require('axios');

const base_url = 'https://brasilapi.com.br/api/cnpj/v1/';

/*Função assincrona para concatenar a url base com o caminho CNPJ e função que pega com o axios os dados da API brasil com a url já concatenada*/
async function getCnpj(cnpj) {
    //Contatenação da url com o CNPJ
    const urlCompleta = `${base_url}${cnpj}`;

    //Promise com o axios pegando a info na API brasil já com a url completa. Com o await
    const answer = await axios.get(urlCompleta);

    // Respostas que eu desejo que apareça no desafio
    const responseData = {
        //Resposta filial ou matriz
        descricao_matriz_filial: answer.data.descricao_matriz_filial,
        //Resposta UF
        uf: answer.data.uf,
        //Resposta razão social
        razao_social: answer.data.razao_social,
        //Resposta nome fantasia
        nome_fantasia: answer.data.nome_fantasia,
        //Resposta situação cadastral
        descricao_situacao_cadastral: answer.data.descricao_situacao_cadastral
    };

    //retornando as respostas
    return responseData;
};

//Exportando a minha função 
module.exports = getCnpj;