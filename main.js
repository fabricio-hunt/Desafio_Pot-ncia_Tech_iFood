class Personagem {
    constructor(nome, nivel, pontosRanque, vitorias, derrotas) {
        this.nome = nome;
        this.nivel = nivel;
        this.pontosRanque = pontosRanque;
        this.vitorias = vitorias;
        this.derrotas = derrotas;
    }

    calcularPontuacao() {
        return this.vitorias * 3 - this.derrotas * 2 + this.nivel * 10;
    }

    atualizarPontuacao(vitoria) {
        if (vitoria) {
            this.vitorias += 1;
        } else {
            this.derrotas += 1;
        }

        this.pontosRanque = this.calcularPontuacao();
    }

    exibirStatus() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Nível: ${this.nivel}`);
        console.log(`Vitórias: ${this.vitorias}`);
        console.log(`Derrotas: ${this.derrotas}`);
        console.log(`Pontos Ranqueados: ${this.pontosRanque}\n`);
    }
}

function realizarPartida(personagem1, personagem2, vencedor) {
    if (vencedor === 1) {
        personagem1.atualizarPontuacao(true);
        personagem2.atualizarPontuacao(false);
    } else if (vencedor === 2) {
        personagem1.atualizarPontuacao(false);
        personagem2.atualizarPontuacao(true);
    } else {
        console.log("Partida inválida. O vencedor deve ser 1 ou 2.");
    }
}

// Exemplo de uso:
const personagem1 = new Personagem("Herói1", 5, 100, 10, 5);
const personagem2 = new Personagem("Herói2", 4, 80, 8, 7);

personagem1.exibirStatus();
personagem2.exibirStatus();

realizarPartida(personagem1, personagem2, 1);

console.log("Após a partida:");
personagem1.exibirStatus();
personagem2.exibirStatus();
