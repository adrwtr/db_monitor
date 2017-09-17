var npm_commander = require('commander');
var npm_bottlejs = require('bottlejs');
var npm_mysql = require('mysql');
var npm_diskdb = require('diskdb');

// app
var service_diskdb = require('./services/diskdb.js');

//service manager
var objServiceManager = new npm_bottlejs();
objServiceManager.service('npm_mysql', npm_mysql);
objServiceManager.service('npm_diskdb', function () { return npm_diskdb; });

objServiceManager.factory(
    'service_diskdb', 
    function(container) {        
        var objDiskdbService = new service_diskdb();
        objDiskdbService.__construct(objServiceManager);
        return objDiskdbService;
    }
);
var teste = objServiceManager.container.service_diskdb;
console.log(teste.getDbConexoes().find());
//.getDbConexoes().find()
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