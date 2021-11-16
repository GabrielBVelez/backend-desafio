const express = require('express');
const cors = require('cors');
//'importando' a função que pega a info da API brasil
const getCnpj = require('../src/api/indexAxios');

// Criando a aplicação
const router = express();

router.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    router.use(cors());
    next()
});

/* (rota, (req -> dados da requisição(ex:parametros, token), res -> objeto que utiliza para enviar uma resposta pro usuario quando ele usar a rota))*/
router.get('/api/v1/cnpj/:cnpj', (req, res) => {
    
    const cnpj = req.params.cnpj;

    getCnpj(cnpj).then((data) => {
        return res.json(data);
    })
});

router.listen(3001, () => {
    console.log('Servidor funcionando...');
});
