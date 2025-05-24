// EMOJIS CHUVA
let paginaAtual = 'corações'; // ou 'tempo', 'bolo' etc.

const emojisPorPagina = {
    corações: ['🎂'],
    amor:['💗'],
    tempo: ['⌛'],
    festa: ['💞']
};

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = getEmojiAtual();

    document.getElementById('emoji-container').appendChild(emoji);

    // Estilos iniciais
    emoji.style.position = 'absolute';
    emoji.style.left = Math.random() * window.innerWidth + 'px';
    emoji.style.fontSize = Math.random() * 30 + 30 + 'px';
    emoji.style.top = '-50px';
    emoji.style.opacity = 1;
    emoji.style.transition = 'opacity 0.5s linear';

    let tempo = 0;
    const duracao = 7000; // milissegundos

    function animar() {
        tempo += 16;

        const progress = tempo / duracao;
        const translateY = progress * window.innerHeight;

        emoji.style.transform = `translateY(${translateY}px)`;

        // Diminui a opacidade ao longo do tempo
        emoji.style.opacity = 1 - progress;

        // Atualiza o emoji conforme a página atual
        emoji.innerText = getEmojiAtual();

        if (tempo < duracao) {
            requestAnimationFrame(animar);
        } else {
            emoji.remove(); // Remove o emoji do DOM ao fim da animação
        }
    }

    requestAnimationFrame(animar);
}


function getEmojiAtual() {
    const lista = emojisPorPagina[paginaAtual] || ['❓'];
    return lista[Math.floor(Math.random() * lista.length)];
}

setInterval(createEmoji, 300);
window.addEventListener('scroll', () => {
    const y = window.scrollY;

    if (y < 600) {
        paginaAtual = 'corações';
    } else if (y < 1200) {
        paginaAtual = 'tempo';
    } else if (y < 1800) {
        paginaAtual = 'festa';
    } else {
        paginaAtual = 'amor';
    }
});

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
const texto = "Feliz 1 ano de namoro, meu amor!";
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

setInterval(atualizarContador, 1000);
atualizarContador();
