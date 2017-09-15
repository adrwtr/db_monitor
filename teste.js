var bottlejs = require('bottlejs');

function MinhaClasse() {
    return 1;
};

var bottle = new bottlejs();
bottle.service('teste', function() {
    return { teste : 1 } ;
});

var a = bottle.container.teste;
console.log(bottle.container.teste);
console.log(a.teste);
console.log(typeof(a));
console.log(a.MinhaClasse);

