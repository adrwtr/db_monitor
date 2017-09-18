// npm
var npm_mysql = require('mysql');
var npm_diskdb = require('diskdb');
var npm_bottlejs = require('bottlejs');

// app
var service_diskdb = require('../services/diskdb.js');


//service manager
var objServiceManager = new npm_bottlejs();
objServiceManager.service('npm_mysql', function () { return npm_mysql; });
objServiceManager.service('npm_diskdb', function () { return npm_diskdb; });

objServiceManager.factory(
    'service_diskdb',
    function(container) {
        var objDiskdbService = new service_diskdb();
        objDiskdbService.__construct(objServiceManager);

        return objDiskdbService;
    }
);

module.exports = objServiceManager;