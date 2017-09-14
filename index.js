var npm_commander = require('commander');
var npm_mysql = require('mysql');
var npm_diskdb = require('diskdb');

// app
const objMysqlService = require('./services/mysql.js');
const objDiskdbService = require('./services/diskdb.js');

// controllers
const objDatabaseController = require('./controller/database_controller.js');
const objConexaoController = require('./controller/conexao_controller.js');

npm_commander
  .version('1.0.0')
  .option('-d, --database', 'Lista os bancos de dados')
  .option('-c, --conlist', 'Lista de conexões')
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
    var retorno = objConexaoController.ConList(
        npm_diskdb,
        objDiskdbService
    );
}