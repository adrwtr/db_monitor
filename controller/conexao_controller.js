// const objDiskDb = require('../services/diskdb.js');
const ds_dados_programa = "dados_programa";

// conlist
function conList(
    npm_diskdb,
    objDiskDb
) {
    var objConexoes = objDiskDb.getDbConexoes(npm_diskdb);
    var objConexaoPrograma = objDiskDb.getDbPrograma(npm_diskdb);
    var arrDadosPrograma = objConexaoPrograma.find(
        {
            _id : ds_dados_programa
        }
    );

    if (objConexoes != undefined) {
        var arrConexoes = objConexoes.find();

        arrConexoes.forEach(
            function(arrConexao) {
                var ds_nome_conexao = arrConexao.ds_nome;

                if (arrDadosPrograma[0].nr_conexao_id == arrConexao.id) {
                    ds_nome_conexao = '> ' + ds_nome_conexao;
                }

                console.log(ds_nome_conexao);
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
                        {_id : ds_dados_programa}
                    );

                    if (arrDadosPrograma.length == 0) {
                        arrDadosPrograma = {
                            'nr_conexao_id' : 0
                        };
                    }

                    arrDadosPrograma[0].nr_conexao_id = arrConexao.id;

                    objConexaoPrograma.update(
                        {
                            _id : ds_dados_programa
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
    ds_dados_programa: ds_dados_programa,
    conList: conList,
    conSet: conSet
};