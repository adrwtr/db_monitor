var npm_commander = require('commander');
var npm_bottlejs = require('bottlejs');
var npm_mysql = require('mysql');
var npm_diskdb = require('diskdb');

var test1 = require('./services/diskdb.js');

//service manager
var objServiceManager = new npm_bottlejs();
objServiceManager.service('npm_mysql', npm_mysql);
objServiceManager.service('npm_diskdb', npm_diskdb);
objServiceManager.service('service_diskdb', test1);
var a  = objServiceManager.container.service_diskdb;

console.log(objServiceManager.container.service_diskdb.getDbPrograma(npm_diskdb).find());
//console.log(test1.getDbPrograma(npm_diskdb).find());
// .getDbPrograma(npm_diskdb).find()