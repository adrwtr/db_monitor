var assert = require('assert');
var bottlejs = require('bottlejs');
var chai = require('chai');
var expect = chai.expect;

describe(
    'Teste de bottlejs',
    function() {
        it(
            'Criando Objetos no manager',
            function (done) {
                // classe definida para servico
                function MinhaClasse() {
                    return { 
                        valor_da_classe : 10,

                        funcao_da_classe : function()
                        {
                            this.valor_da_classe = 30;
                            return 20;
                        },
                    };
                };

                // service manager
                var bottle = new bottlejs();
                bottle.service('servico', MinhaClasse);
                var objManager = bottle.container.servico;

                expect(10).to.equal(
                    objManager.valor_da_classe
                );

                expect(20).to.equal(
                    objManager.funcao_da_classe()
                );

                expect(30).to.equal(
                    objManager.valor_da_classe
                );

                done();
            }
        );
    }
);