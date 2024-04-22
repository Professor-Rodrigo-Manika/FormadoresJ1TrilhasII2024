const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo")

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo")
            textos[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T23:59:59");
const tempoObjetivo2 = new Date("2024-11-05T23:59:59");
const tempoObjetivo3 = new Date("2024-12-05T23:59:59");
const tempoObjetivo4 = new Date("2024-10-05T23:59:59");

let tempoAtual = new Date();

contadores[0].textContent = CalculaTempo(tempoObjetivo1);
contadores[1].textContent = CalculaTempo(tempoObjetivo2);
contadores[2].textContent = CalculaTempo(tempoObjetivo3);
contadores[3].textContent = CalculaTempo(tempoObjetivo4);

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

contadores[0].textContent = CalculaTempo(tempos[0]);


function CalculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let numSegundos = Math.floor(tempoFinal / 1000);
    let numMinutos = Math.floor(numSegundos / 60);
    let numHoras = Math.floor(numMinutos / 60);
    let numDias = Math.floor(numHoras / 24);
    
    numSegundos %= 60;
    numMinutos %= 60;
    numHoras %= 24;

    if(tempoFinal > 0){
        let contador = '';
        contador += '<div class="contador-digito>';
        contador += '<p class="contador-digito-numero">' +numDias+'</p>';
        contador += '<p class="contador-digito-texto">dias </p>';
        contador += '</div>';
        contador += '<div class="contador-digito>';
        contador += '<p class="contador-digito-numero">' +numHoras+ '</p>';
        contador += '<p class="contador-digito-texto">horas </p>';
        contador += '</div>';
        contador += '<div class="contador-digito>';
        contador += '<p class="contador-digito-numero">' +numMinutos+ '</p>';
        contador += '<p class="contador-digito-texto">minutos </p>';
        contador += '</div>';
        contador += '<div class="contador-digito>';
        contador += '<p class="contador-digito-numero">' + numSegundos + '</p>';
        contador += '<p class="contador-digito-texto">segundos </p>';
        contador += '</div>';
        return contador;
    } else {
        return "Prazo Finalizado";
    }
}

contadores[0].textContent = CalculaTempo(tempoObjetivo1);


function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        contadores[i].innerHTML = CalculaTempo(tempos[i])
    }

}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();