
// FIM EMOJIS CHUVA
// CONTADOR DE TEMPO
function atualizarContador() {
    const dataInicial = new Date('2024-07-21T00:00:00');
    const agora = new Date();

    const diferencaEmMilissegundos = agora - dataInicial;

    const totalDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencaEmMilissegundos % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML =
        `Fazem <span class="numero">${totalDias}</span> dias, 
         <span class="numero">${horas}</span> horas, 
         <span class="numero">${minutos}</span> minutos e 
         <span class="numero">${segundos}</span> segundos que dois caminhos viraram um só...`;
}

// FIM CONTADOR DE TEMPO

// TYPER
const texto = "Feliz 1 ano de namoro, minha metade!";
const elemento = document.getElementById("typer");

let i = 0;
let apagando = false;

function escrever() {
    if (!apagando) {
        elemento.innerHTML += texto.charAt(i);
        i++;
        if (i < texto.length) {
            setTimeout(escrever, 60); // Continua escrevendo
        } else {
            // Espera um pouco antes de começar a apagar
            setTimeout(() => {
                apagando = true;
                escrever();
            }, 2500);
        }
    } else {
        elemento.innerHTML = texto.substring(0, i - 1);
        i--;
        if (i > 0) {
            setTimeout(escrever, 50); // Apaga mais rápido
        } else {
            apagando = false;
            setTimeout(escrever, 500); // Espera um pouco antes de recomeçar
        }
    }
}

escrever();


// CHAMAR FUNCOES


setInterval(atualizarContador, 1000);
atualizarContador();