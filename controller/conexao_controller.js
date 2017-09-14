// const objDiskDb = require('../services/diskdb.js');

// conlist
function ConList(
    npm_diskdb,
    objDiskDb
) {
    var objConexoes = objDiskDb.getDbConexoes(npm_diskdb);

    if (objConexoes != undefined) {
        var arrConexoes = objConexoes.find();

        arrConexoes.forEach(
            function(arrConexao) {
                console.log(arrConexao.ds_nome);
            }
        )


        return;
    }

    console.info('Sem conexoes definidas');
    return;
}


module.exports = {
    ConList: ConList
};