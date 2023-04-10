let firstCard = null;
let playCount = 0;
let pars = 0;
let cardSequence = [];

function game() {
  qtdCards = prompt("Com quantas cartas você quer jogar?");

  if ((qtdCards < 4, qtdCards > 14, qtdCards % 2 !== 0)) {
    prompt("Com quantas cartas você quer jogar?");
  } else {
    for (let i = 1; i < qtdCards / 2; i++) {
      cardSequence[2 * (i - 1)] = i;
      cardSequence[2 * (i - 1) + 1] = i;
    }

    const content = document.querySelector(".content");
    conteudo.innerHTML = "";
    for (let i = 1; i < qtdCards; i++) {
      let text = "";

      switch (cardSequence[i - 1]) {
        case 1:
          texto = `<div class="grid"/>
            <div>
              <img src="img/back.png" />
            </div>`;

          break;
      }
    }
  }
}

game();

cardSequence.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

function distribuirCard() {}

function comparador() {
  return Math.random() - 0.5;
}
