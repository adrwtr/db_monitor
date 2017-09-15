// var npm_diskdb = require('diskdb');

function getDbConexoes(npm_diskdb)
{
    var db = npm_diskdb.connect(
        './data/',
        ['db_conexoes']
    );

    return db.db_conexoes;
}

function getDbPrograma(npm_diskdb)
{
    try {
        var db = npm_diskdb.connect(
            './data/',
            ['db_programa']
        );
    } catch (err) {
        console.log(err);
    }

    return db.db_programa;
}


module.exports = {
    getDbConexoes: getDbConexoes,
    getDbPrograma: getDbPrograma,
};