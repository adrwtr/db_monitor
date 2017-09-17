// var npm_diskdb = require('diskdb');
function DiskDbService() {
    return {
        objServiceManager : null,

        __construct : function(objServiceManager) {
            this.setServiceManager(objServiceManager);
        },

        setServiceManager : function(objServiceManager) {
            this.objServiceManager = objServiceManager;
        },

        getServiceManager : function() {
            return this.objServiceManager;
        },

        getNpmDiskDb : function() {
            return this.getServiceManager().container.npm_diskdb;
        },

        getDbConexoes : function()
        {
            var db = this.getNpmDiskDb().connect(
                './data/',
                ['db_conexoes']
            );

            return db.db_conexoes;
        },

        getDbPrograma : function()
        {
            try {
                var db = this.getNpmDiskDb().connect(
                    './data/',
                    ['db_programa']
                );
            } catch (err) {
                console.log(err);
            }

            return db.db_programa;
        }
    };
}


module.exports = DiskDbService;