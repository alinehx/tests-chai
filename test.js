var expect = require('chai').expect,	
	assert = require('chai').assert;

describe('Testando valores retornando mensagem',function(){
	
	function retornarTamanho(obj)
	{
		var size = 0, key;
    	for (key in obj) 
        	if (obj.hasOwnProperty(key)) size++;    	
    	return size;
	}
	

	it('Testando valores do dados.json',function(done){
		var dados = require('./dados');
		var size = retornarTamanho(dados);

		assert.isObject(dados, 'dados nao e um objeto');
		assert.strictEqual(2, 2, 'Objeto nao corresponde ao esperado');

		assert.typeOf(dados.nome, 'string', 'nome nao e do tipo string');
		assert.strictEqual(dados.nome, 'Aline Haxkar Lavorato', 'dados.nome e diferente de Aline Haxkar Lavorato');

		assert.typeOf(dados.idade, 'number', 'dados nao e do tipo numerico');
		assert.strictEqual(dados.idade, 23, 'dados.idade e diferente de 23');


		expect(dados).to.be.an('Object', 'dados nao e um objeto');
		expect(size).to.deep.equal(2, 2, 'Objeto nao corresponde ao esperado');

		expect(dados.nome).to.be.a('string', 'dados.nome nao e do tipo string');
		expect(dados.nome).to.deep.equal('Aline Haxkar Lavorato', 'dados.nome e diferente de Aline Haxkar Lavorato');

		expect(dados.idade).to.be.a('number', 'dados.idade nao e do tipo numerico');
		expect(dados.idade).to.deep.equal(23, 'dados.idade e diferente de 23');
		

		done();
	})
})

 
 

