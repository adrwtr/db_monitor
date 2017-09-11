var npm_commander = require('commander');
var npm_mysql = require('mysql');

// app
const objMysql = require('./services/mysql.js');

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

    var a = objMysql.getDatabasesSchema(objConnectionBaseA);

    a.then(function(valor) {
        console.log(valor);
    });
}