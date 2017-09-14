var npm_commander = require('commander');
var npm_mysql = require('mysql');

// app
const objMysql = require('./services/mysql.js');
const objDatabaseController = require('./controller/database_controller.js');

npm_commander
  .version('1.0.0')
  .option('-d, --database', 'Lista os bancos de dados')
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