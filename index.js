var npm_commander = require('commander');

// app
var service_di = require('./services/di.js');


/*
objServiceManager.service('services_mysql', require('./services/mysql.js'));

// controllers
const objDatabaseController = require('./controller/database_controller.js');
const objConexaoController = require('./controller/conexao_controller.js');

npm_commander
  .version('1.0.0')
  .option('-d, --database', 'Lista os bancos de dados')
  .option('-c, --conlist', 'Lista de conexões')
  .option('-1, --conset <n>', 'Lista de conexões', parseInt)
  .parse(process.argv);

if (npm_commander.database) {
    const objConnectionBaseA = npm_mysql.createConnection({
        host     : "localhost",
        user     : "backup",
        password : "UniSeguro",
        database : "adriano"
    });

    objDatabaseController.LerDatabases(
        objMysql,
        objConnectionBaseA
    );
}

if (npm_commander.conlist) {
    var retorno = objConexaoController.conList(
        npm_diskdb,
        objDiskdbService
    );
}

if (npm_commander.conset) {
    objConexaoController.conSet(
        npm_diskdb,
        objDiskdbService,
        npm_commander.conset
    );
}*/