function sortear() {
    //usado para recuperar o valor digitado pelo usuario / sem o "value" recuperaria apenas a tag e não o valor
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      }

    for(let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(de, ate);

        //enquanto o numero sorteado receber um numero ja existe, ele ira sortear outros 
        //includes = devolver True or False
        while(sorteados.includes(numero)) {
            numero = gerarNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);

    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;

    alterarBotao();

}

function gerarNumeroAleatorio(min, max) {
    //gerar numero aleatorio
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function alterarBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if(botao.classList.contains('container__botao-desabilitado')) {

        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {

        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`

    alterarBotao();
}