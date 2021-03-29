let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let result = document.getElementById('result');

function calc() {
    //console.log('Calculating'); 
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    result.innerHTML =  `<p> Serão necessários para o evento: </p>`;
    result.innerHTML += `<p> ${qtdTotalCarne/1000} Kg de Carne </p>`;
    result.innerHTML += `<p> ${Math.ceil(qtdTotalCerveja/269)} Latas de Cerveja (269ml) </p>`;
    result.innerHTML += `<p> ${Math.ceil(qtdTotalBebidas/2000)} Garrafas de Refrigerante (2l) </p>`;

    //console.log(qtdTotalCarne, qtdTotalCerveja, qtdTotalBebidas);
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } 
    else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    }
    else {
        return 1000;
    }
}