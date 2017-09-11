var assert = require('assert');
var npm_mysql = require('mysql');

// app
const objMysql = require('../services/mysql.js');

describe(
    'Teste Servico Mysql',
    function() {
        describe(
            '#getDatabases(objConexao)',
            function() {
                it(
                    'Total de databases',
                    function(done) {
                        const objConnectionBaseA = npm_mysql.createConnection({
                            host     : "localhost",
                            user     : "backup",
                            password : "UniSeguro",
                            database : "adriano"
                        });

                        const nr_qtd_database = 18;

                        objMysql.getDatabases(
                            objConnectionBaseA
                        ).then(
                            function(arrResultadoA) {
                                var a = assert.equal(
                                    arrResultadoA.length,
                                    nr_qtd_database
                                );

                                var b = assert.equal(
                                    arrResultadoA[0].ds_nome,
                                    'information_schema'
                                );

                                done();
                            }
                        ).catch(
                            function (objError) {
                                console.log(objError);
                            }
                        );
                    }
                );
            }
        );
    }
);