var assert = require('assert');
var npm_db = require('diskdb');
var chai = require('chai');
var expect = chai.expect;



describe(
    'Teste de diskdb',
    function() {
        it(
            'Remove - save - count',
            function (done) {
                var db = npm_db.connect(
                    './data/',
                    ['collection_test']
                );

                db.collection_test.remove();
                db = null;

                db = npm_db.connect(
                    './data/',
                    ['collection_test']
                );

                var objRegistro = {
                    _id : '0ce47983623f4fb096ab3303d7bb6de7',
                    nome : 'Adriano Waltrick'
                };

                db.collection_test
                    .save(objRegistro);

                var arrValor = db.collection_test.find();
                expect(arrValor.length).to.equal(1);
                expect(db.collection_test.count()).to.equal(1);


                done();
            }
        );

        it(
            'find',
            function (done) {
                var db = npm_db.connect(
                    './data/',
                    ['collection_test']
                );

                var arrValor = db.collection_test.find();
                expect(arrValor.length).to.equal(1);
                expect(db.collection_test.count()).to.equal(1);

                done();
            }
        );
    }
);