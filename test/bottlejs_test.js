var assert = require('assert');
var bottlejs = require('bottlejs');
var chai = require('chai');
var expect = chai.expect;

describe(
    'Teste de bottlejs',
    function() {
        it(
            'teste',
            function (done) {

                var MinhaClasse = function() {
                    return 1;
                };

                var bottle = new bottlejs();
                bottle.service('teste', MinhaClasse);

                var a = bottle.container.teste;
                console.log(a);

                expect(1).to.equal(
                    bottle.container.teste
                );

                done();
            }
        );
    }
);