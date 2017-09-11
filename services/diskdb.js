// var npm_diskdb = require('diskdb');

function getDbConexoes(npm_diskdb)
{
    var db = npm_diskdb.connect(
        './data/',
        ['conexoes']
    );

    return db.conexoes;
}


module.exports = {
    getDbConexoesApp: getDbConexoes
};