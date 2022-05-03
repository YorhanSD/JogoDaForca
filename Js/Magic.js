let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001 = {
        nome: "GTA",
        categoria: "GAMES"
    },
    palavra002 = {
        nome: "MARIO",
        categoria: "GAMES"
    },
    palavra003 = {
        nome: "BATTLEFIELD",
        categoria: "GAMES"
    },
    palavra004 = {
        nome: "MINECRAFT",
        categoria: "GAMES"
    },
    palavra005 = {
        nome: "PLAYSTATION",
        categoria: "GAMES"
    },
    palavra006 = {
        nome: "TRATOR",
        categoria: "VEICULOS"
    },
    palavra007 = {
        nome: "CAMINHAO",
        categoria: "VEICULOS"
    },
    palavra008 = {
        nome: "AEROFOLIO",
        categoria: "VEICULOS"
    },
    palavra009 = {
        nome: "AMORTECEDOR",
        categoria: "VEICULOS"
    },
    palavra010 = {
        nome: "BOLEIA",
        categoria: "VEICULOS"
    },
];

criarPalavraSecreta();

function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraTela();

function montarPalavraTela() {
    const categoria = document.getElementById("Categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const secreta = document.getElementById("Palavra-Secreta");
    secreta.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp";
            secreta.innerHTML = secreta.innerHTML + "<div class='Letras'>" + listaDinamica[i] + "</div>";
        }
        else {
            secreta.innerHTML = secreta.innerHTML + "<div class='Letras'>" + listaDinamica[i] + "</div>";
        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById("Tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("Tecla-" + letra);
        comparaListas(letra);
        montarPalavraTela();
    }
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "blue";
    document.getElementById(tecla).style.color = "gray";
    document.getElementById(tecla).style.border = "black";
}

function comparaListas(letra) {
    const posicao = palavraSecretaSorteada.indexOf(letra);
    if (posicao < 0) {
        tentativas--;
        carregaImagemForca();
        if (tentativas == 0) {
            abreModal("   Você Perdeu!!!", "   Mais sorte na próxima, amigão kkk. A palavra secreta era : " + palavraSecretaSorteada);
        }
    }
    else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal("   Você Ganhou, Parabéns!!!", "   Você é muito brabo!!!");
        tentativas = 0;
    }
}

function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("Imagem").style.background = "url('../Imgs/Forca-2.png')";
            break;
        case 4:
            document.getElementById("Imagem").style.background = "url('../Imgs/Forca-3.png')";
            break;
        case 3:
            document.getElementById("Imagem").style.background = "url('../Imgs/Forca-4.png')";
            break;
        case 2:
            document.getElementById("Imagem").style.background = "url('../Imgs/Forca-5.png')";
            break;
        case 1:
            document.getElementById("Imagem").style.background = "url('../Imgs/Forca-6.png')";
            break;
        default:
            document.getElementById("Imagem").style.background = "url('../Imgs/Forca-1.png')";
            break;

    }
}

function abreModal(titulo, menssagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = menssagem;

    $("#Minha-Modal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btn-Reiniciar")
btnReiniciar.addEventListener("click", function(){
    location.reload();
});