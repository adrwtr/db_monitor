// var npm_diskdb = require('diskdb');
function ConexaoController() {
    return {
        objServiceManager : null,
        ds_dados_programa : "dados_programa",

        __construct : function(objServiceManager) {
            this.setServiceManager(objServiceManager);
        },

        setServiceManager : function(objServiceManager) {
            this.objServiceManager = objServiceManager;
        },

        getServiceManager : function() {
            return this.objServiceManager;
        },

        getServiceDiskdb : function() {
            return this.getServiceManager().container.service_diskdb;
        },


        conList : function() {
            var objConexoes = this.getServiceDiskdb().getDbConexoes();
            var objConexaoPrograma = this.getServiceDiskdb().getDbPrograma();
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

                        ds_nome_conexao = (arrDadosPrograma[0].nr_conexao_id == arrConexao.id)
                            ? '> ' + ds_nome_conexao
                            : ' ' + ds_nome_conexao;

                        console.log(ds_nome_conexao);
                    }
                );

                return 1;
            }

            console.info('Sem conexoes definidas');
            return 1;
        }

        conSet : function(nr_id) {
            var objConexoes = this.getServiceDiskdb().getDbConexoes();

            if (objConexoes != undefined) {
                var arrConexoes = objConexoes.find();

                arrConexoes.forEach(
                    function(arrConexao) {
                        if (arrConexao.id == nr_id) {
                            // seta conexão atual
                            var objConexaoPrograma = this.getServiceDiskdb().getDbPrograma();
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
    };
}

module.exports = ConexaoController;