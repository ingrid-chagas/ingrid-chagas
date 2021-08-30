const express = require('express'); 
const server = require('..');

const fs = require('fs');
var questoes;

const router = express.Router();

router.get('/questoes', (req, res) => {
    return res.json(questoes);
});

fs.readFile('./src/questoes.json', 'utf-8', function(err, data){
    if(err) {
        throw err;
    }
    questoes = JSON.parse(data);
})

module.exports = server => server.use(router);