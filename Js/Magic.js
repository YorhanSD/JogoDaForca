let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001 = {
        nome: "CRASH",
        categoria: "JOGOS-DIGITAIS"
    },
    palavra002 = {
        nome: "MARIO",
        categoria: "JOGOS-DIGITAIS"
    },
    palavra003 = {
        nome: "MINECRAFT",
        categoria: "JOGOS-DIGITAIS"
    },
    palavra004 = {
        nome: "BATTLEFIELD",
        categoria: "JOGOS-DIGITAIS"
    },
    palavra005 = {
        nome: "TETRIS",
        categoria: "JOGOS-DIGITAIS"
    },
    palavra006 = {
        nome: "SONIC",
        categoria: "JOGOS-DIGITAIS"
    },
    palavra007 = {
        nome: "MEGAMAN",
        categoria: "JOGOS-DIGITAIS"
    },
    palavra008 = {
        nome: "BOMBERMAN",
        categoria: "JOGOS-DIGITAIS"
    },
    palavra009 = {
        nome: "CUPHEAD",
        categoria: "JOGOS-DIGITAIS"
    },
    palavra010 = {
        nome: "CIVILIZATION",
        categoria: "JOGOS-DIGITAIS"
    },
    palavra011 = {
        nome: "ESTROGONOFE",
        categoria: "ALIMENTOS"
    },
    palavra012 = {
        nome: "CAMARAO",
        categoria: "ALIMENTOS"
    },
    palavra013 = {
        nome: "ROSBIFE",
        categoria: "ALIMENTOS"
    },
    palavra014 = {
        nome: "GYOZA",
        categoria: "ALIMENTOS"
    },
    palavra015 = {
        nome: "GUACAMOLE",
        categoria: "ALIMENTOS"
    },
    palavra016 = {
        nome: "LASANHA",
        categoria: "ALIMENTOS"
    },
    palavra017 = {
        nome: "OVO",
        categoria: "ALIMENTOS"
    },
    palavra018 = {
        nome: "LEITE",
        categoria: "ALIMENTOS"
    },
    palavra019 = {
        nome: "SANDUICHE",
        categoria: "ALIMENTOS"
    },
    palavra020 = {
        nome: "MANGA",
        categoria: "ALIMENTOS"
    },
    palavra021 = {
        nome: "CAMINHAO",
        categoria: "VEICULOS"
    },
    palavra022 = {
        nome: "CARROCA",
        categoria: "VEICULOS"
    },
    palavra023 = {
        nome: "TRATOR",
        categoria: "VEICULOS"
    },
    palavra024 = {
        nome: "CARRO",
        categoria: "VEICULOS"
    },
    palavra025 = {
        nome: "CAMIONETE",
        categoria: "VEICULOS"
    },
    palavra026 = {
        nome: "JIPE",
        categoria: "VEICULOS"
    },
    palavra027 = {
        nome: "MOTOCICLETA",
        categoria: "VEICULOS"
    },
    palavra028 = {
        nome: "BICICLETA",
        categoria: "VEICULOS"
    },
    palavra029 = {
        nome: "CHARRETE",
        categoria: "VEICULOS"
    },
    palavra030 = {
        nome: "ONIBUS",
        categoria: "VEICULOS"
    },
    palavra031 = {
        nome: "COPACABANA",
        categoria: "PONTO-TURISTICO"
    },
    palavra032 = {
        nome: "COLISEU",
        categoria: "PONTO-TURISTICO"
    },
    palavra033 = {
        nome: "DISNEYLAND",
        categoria: "PONTO-TURISTICO"
    },
    palavra034 = {
        nome: "STONEHENGE",
        categoria: "PONTO-TURISTICO"
    },
    palavra035 = {
        nome: "PETRA",
        categoria: "PONTO-TURISTICO"
    },
    palavra036 = {
        nome: "IPANEMA",
        categoria: "PONTO-TURISTICO"
    },
    palavra037 = {
        nome: "BALI",
        categoria: "PONTO-TURISTICO"
    },
    palavra038 = {
        nome: "VENEZA",
        categoria: "PONTO-TURISTICO"
    },
    palavra039 = {
        nome: "DUBAI",
        categoria: "PONTO-TURISTICO"
    },
    palavra040 = {
        nome: "KATHMANDU",
        categoria: "PONTO-TURISTICO"
    },
    palavra041 = {
        nome: "TECLADO",
        categoria: "INSTRUMENTOS-MUSICAIS"
    },
    palavra042 = {
        nome: "BERIMBAU",
        categoria: "INSTRUMENTOS-MUSICAIS"
    },
    palavra043 = {
        nome: "GUITARRA",
        categoria: "INSTRUMENTOS-MUSICAIS"
    },
    palavra044 = {
        nome: "CITARA",
        categoria: "INSTRUMENTOS-MUSICAIS"
    },
    palavra045 = {
        nome: "UKULELE",
        categoria: "INSTRUMENTOS-MUSICAIS"
    },
    palavra046 = {
        nome: "BATERIA",
        categoria: "INSTRUMENTOS-MUSICAIS"
    },
    palavra047 = {
        nome: "SAXOFONE",
        categoria: "INSTRUMENTOS-MUSICAIS"
    },
    palavra048 = {
        nome: "ARCODEAO",
        categoria: "INSTRUMENTOS-MUSICAIS"
    },
    palavra049 = {
        nome: "ATABAQUE",
        categoria: "INSTRUMENTOS-MUSICAIS"
    },
    palavra050 = {
        nome: "TEREMIM",
        categoria: "INSTRUMENTOS-MUSICAIS"
    },
    palavra051 = {
        nome: "HIDRA",
        categoria: "CRIATURAS-LENDARIAS"
    },
    palavra052 = {
        nome: "FENIX",
        categoria: "CRIATURAS-LENDARIAS"
    },
    palavra053 = {
        nome: "BOITATA",
        categoria: "CRIATURAS-LENDARIAS"
    },
    palavra054 = {
        nome: "LOBISOMEM",
        categoria: "CRIATURAS-LENDARIAS"
    },
    palavra055 = {
        nome: "PEGASSUS",
        categoria: "CRIATURAS-LENDARIAS"
    },
    palavra056 = {
        nome: "DRAGAO",
        categoria: "CRIATURAS-LENDARIAS"
    },
    palavra057 = {
        nome: "KRAKEN",
        categoria: "CRIATURAS-LENDARIAS"
    },
    palavra058 = {
        nome: "QUIMERA",
        categoria: "CRIATURAS-LENDARIAS"
    },
    palavra059 = {
        nome: "LEPRECHAUN",
        categoria: "CRIATURAS-LENDARIAS"
    },
    palavra060 = {
        nome: "SEREIA",
        categoria: "CRIATURAS-LENDARIAS"
    },
    palavra061 = {
        nome: "ARTEMISIA",
        categoria: "GRANDES-MESTRES-DA-PINTURA"
    },
    palavra062 = {
        nome: "CASSATT",
        categoria: "GRANDES-MESTRES-DA-PINTURA"
    },
    palavra063 = {
        nome: "PORTINARI",
        categoria: "GRANDES-MESTRES-DA-PINTURA"
    },
    palavra064 = {
        nome: "TARSILA",
        categoria: "GRANDES-MESTRES-DA-PINTURA"
    },
    palavra065 = {
        nome: "VINCENT",
        categoria: "GRANDES-MESTRES-DA-PINTURA"
    },
    palavra066 = {
        nome: "DALI",
        categoria: "GRANDES-MESTRES-DA-PINTURA"
    },
    palavra067 = {
        nome: "PICASSO",
        categoria: "GRANDES-MESTRES-DA-PINTURA"
    },
    palavra068 = {
        nome: "MONET",
        categoria: "GRANDES-MESTRES-DA-PINTURA"
    },
    palavra069 = {
        nome: "LEONID",
        categoria: "GRANDES-MESTRES-DA-PINTURA"
    },
    palavra070 = {
        nome: "FRIDA",
        categoria: "GRANDES-MESTRES-DA-PINTURA"
    },
    palavra071 = {
        nome: "DELINEADOR",
        categoria: "MODA"
    },
    palavra072 = {
        nome: "CACHECOL",
        categoria: "MODA"
    },
    palavra073 = {
        nome: "GORRO",
        categoria: "MODA"
    },
    palavra074 = {
        nome: "SOBRETUDO",
        categoria: "MODA"
    },
    palavra075 = {
        nome: "BATOM",
        categoria: "MODA"
    },
    palavra076 = {
        nome: "APLIQUE",
        categoria: "MODA"
    },
    palavra077 = {
        nome: "BLUSH",
        categoria: "MODA"
    },
    palavra078 = {
        nome: "JEANS",
        categoria: "MODA"
    },
    palavra079 = {
        nome: "JAQUETA",
        categoria: "MODA"
    },
    palavra080 = {
        nome: "ALFAIATARIA",
        categoria: "MODA"
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
