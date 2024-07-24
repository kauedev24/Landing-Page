const leonardo = document.querySelector("#info-leonardo");
const samanta = document.querySelector("#info-samanta");
const bruna = document.querySelector("#info-bruna");
const leftButton = document.querySelector("#button-left");
const rightButton = document.querySelector("#button-right");
const cards = document.querySelector("#cards")

const leonardoStyle = leonardo.style
const samantaStyle = samanta.style
const brunaStyle = bruna.style
const leftButtonStyle = leftButton.style
const rightButtonStyle = rightButton.style


function rolarParaDireita() {
  leonardoStyle.display = "none"
  rightButtonStyle.display = "none"
  brunaStyle.display = "block"
  leftButtonStyle.display = "block"
  samanta.style = "margin-left: 0px"
  cards.style = "padding-left: 0; padding-right: 70px; justify-items: flex-end"
}

function rolarParaEsquerda() {
  leonardoStyle.display = "block"
  rightButtonStyle.display = "block"
  brunaStyle.display = "none"
  leftButtonStyle.display = "none"
  cards.style = "padding-left: 70px; padding-right: 0; justify-items: flex-start"
}

