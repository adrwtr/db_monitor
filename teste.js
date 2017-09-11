var assert = require('assert');
var npm_mysql = require('mysql');

// app
const objMysql = require('./services/mysql.js');


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