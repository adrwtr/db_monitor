var bottlejs = require('bottlejs');

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

var bottle = new bottlejs();

bottle.service('servico', MinhaClasse);

var objManager = bottle.container.servico;

console.log(objManager.valor_da_classe);
console.log(objManager.funcao_da_classe);
console.log(objManager.funcao_da_classe());
console.log(objManager.valor_da_classe);


