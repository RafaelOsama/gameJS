alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 7;
console.log(numeroSecreto)
let  chute = prompt('Escolha um número entre 1 e 0');

if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o nùmero secreto ${numeroSecreto}`);
}else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    }else {
        alert(`O número secreto é maior que ${chute}`);
    }
}
