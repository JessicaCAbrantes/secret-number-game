alert("Boas-vindas ao jogo do Número Secreto");
let numeroSecreto = 29;
let chute = prompt("Escolha um número entre 1 e 30");

//se o chute for igual ao número secreto
if (chute == numeroSecreto) {
  console.log("Isso aí! Você descobriu o número secreto!");
} else {
  alert("Você errou!");
}
