// var npm_diskdb = require('diskdb');

function getDbConexoes(npm_diskdb)
{
    var db = npm_diskdb.connect(
        './data/',
        ['db_conexoes']
    );

    return db.db_conexoes;
}


module.exports = {
    getDbConexoes: getDbConexoes
};