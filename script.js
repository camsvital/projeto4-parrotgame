let right = 0;

let click = 0;
let selectedCard;

let lastCard = null;
let firstCard, secondCard;
let numberOfCards = Number(prompt("Com quantas cartas você quer jogar?"));
const conteiner = document.querySelector(".conteiner");
cardSequence = [];
let gameGifs = [
  `src="img/bobrossparrot.gif"`,
  `src="img/bobrossparrot.gif"`,
  `src="img/explodyparrot.gif"`,
  `src="img/explodyparrot.gif"`,
  `src="img/fiestaparrot.gif"`,
  `src="img/fiestaparrot.gif"`,
  `src="img/metalparrot.gif"`,
  `src="img/metalparrot.gif"`,
  `src="img/revertitparrot.gif"`,
  `src="img/revertitparrot.gif"`,
  `src="img/tripletsparrot.gif" `,
  `src="img/tripletsparrot.gif"`,
  `src="img/unicornparrot.gif"`,
  `src="img/unicornparrot.gif"`,
];

while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 !== 0) {
  numberOfCards = prompt("Com quantas Cards você quer jogar?");
}

for (let i = 0; i < numberOfCards; i++) {
  let grid = `
   <div data-test="card" class="cards" onclick='turnCards(this)'> 
       <div class="front">
           <img data-test="face-down-image" class="parrot-img" src="img/back.png">
       </div>
       <div class="back hidden">
       <img data-test="face-up-image" ${gameGifs[i]}>
       </div>
   </div>`;

  cardSequence.push(grid);
}

cardSequence.sort(comparator);

function comparator() {
  return Math.random() - 0.5;
}

conteiner.innerHTML = cardSequence.join("");

function turnCards(element) {
  element.classList.add("turn");
  click++;

  if (selectedCard !== undefined) {
    equalCards(selectedCard, element);
  } else {
    selectedCard = element;
  }
}

function equalCards(firstCard, secondCard) {
  selectedCard = undefined;

  if (firstCard.innerHTML === secondCard.innerHTML) {
    firstCard.removeAttribute("onclick");
    firstCard.removeAttribute("onclick");
    right += 2;

    if (numberOfCards === right) {
      setTimeout(function () {
        alert(`Parabéns. Você ganhou em ${click} jogadas!`);
      }, 500);
    }
  } else {
    setTimeout(function () {
      firstCard.classList.remove("turn");
      secondCard.classList.remove("turn");
    }, 1000);
  }
}
