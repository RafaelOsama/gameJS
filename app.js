alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 7;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    //se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}
if (tentativas > 1) {
    alert(`Isso aí! Você descobriu o nùmero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Isso aí! Você descobriu o nùmero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}


