# Personagem de Jogo - Simulação de Pontuação e Ranqueamento

Este projeto implementa uma classe `Personagem` para simular a pontuação e o ranqueamento de personagens de um jogo, considerando vitórias, derrotas e nível dos personagens. Além disso, permite realizar partidas entre dois personagens e atualizar suas pontuações de acordo com o resultado.

## Classe `Personagem`

A classe `Personagem` é responsável por modelar um personagem com as seguintes propriedades:

- `nome`: Nome do personagem.
- `nivel`: O nível atual do personagem.
- `pontosRanque`: Pontos ranqueados do personagem.
- `vitorias`: Número de vitórias acumuladas.
- `derrotas`: Número de derrotas acumuladas.

### Métodos

#### `calcularPontuacao()`

Calcula a pontuação ranqueada de acordo com a seguinte fórmula:


#### `atualizarPontuacao(vitoria)`

Atualiza o número de vitórias ou derrotas com base no resultado da partida. Se o parâmetro `vitoria` for `true`, o número de vitórias é incrementado; caso contrário, o número de derrotas é incrementado. A pontuação ranqueada do personagem é então recalculada.

#### `exibirStatus()`

Exibe o status atual do personagem, incluindo o nome, nível, número de vitórias, derrotas e pontos ranqueados.

### Função `realizarPartida(personagem1, personagem2, vencedor)`

Realiza uma partida entre dois personagens. O parâmetro `vencedor` define qual personagem venceu a partida:

- Se `vencedor` for `1`, o `personagem1` vence.
- Se `vencedor` for `2`, o `personagem2` vence.
- Caso contrário, a função exibe uma mensagem indicando que a partida é inválida.

## Exemplo de Uso

Aqui está um exemplo de como usar a classe `Personagem` e a função `realizarPartida`:

```javascript
const personagem1 = new Personagem("Herói1", 5, 100, 10, 5);
const personagem2 = new Personagem("Herói2", 4, 80, 8, 7);

personagem1.exibirStatus();
personagem2.exibirStatus();

realizarPartida(personagem1, personagem2, 1);

console.log("Após a partida:");
personagem1.exibirStatus();
personagem2.exibirStatus();

```


Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.


