const express = require('express'); 

const server = express();

server.use(express.json());

server.listen(3000); 

require('./controllers/alunosController')(server);
require('./controllers/questoesController')(server);

module.exports = server;

