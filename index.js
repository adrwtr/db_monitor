var npm_commander = require('commander');

// app
var service_di = require('./services/di.js');


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
    var retorno = service_di.container.objConexaoController.conList();
}

if (npm_commander.conset) {
    var nr_id = npm_commander.conset;

    service_di.container.objConexaoController.conSet(
        nr_id
    );
}