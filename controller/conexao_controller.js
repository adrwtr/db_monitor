// const objDiskDb = require('../services/diskdb.js');

// conlist
function conList(
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
        );

        return 1;
    }

    console.info('Sem conexoes definidas');
    return 1;
}

// conset
function conSet(
    npm_diskdb,
    objDiskDb,
    nr_id
) {
    var objConexoes = objDiskDb.getDbConexoes(npm_diskdb);

    if (objConexoes != undefined) {
        var arrConexoes = objConexoes.find();

        arrConexoes.forEach(
            function(arrConexao) {
                if (arrConexao.id == nr_id) {
                    // seta conexão atual
                    var objConexaoPrograma = objDiskDb.getDbPrograma(npm_diskdb);
                    var arrDadosPrograma = objConexaoPrograma.find(
                        {_id : "87700c88bd9d4498aaba034e463cf5e5"}
                    );

                    if (arrDadosPrograma.length == 0) {
                        arrDadosPrograma = {
                            'nr_conexao_id' : 0
                        };
                    }

                    arrDadosPrograma[0].nr_conexao_id = arrConexao.id;

                    objConexaoPrograma.update(
                        {
                            _id : "87700c88bd9d4498aaba034e463cf5e5"
                        },
                        arrDadosPrograma[0],
                        {
                            multi: false,
                            upsert: false
                        }
                    );
                }
            }
        );
    }
}

module.exports = {
    conList: conList,
    conSet: conSet
};