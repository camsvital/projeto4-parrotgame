let certo = 0;
let carta1, carta2;
let click = 0;
let cartaSelecionada;
sequenciaCartas = [];
let quantidadeDeCartas = Number(prompt("Com quantas cartas você quer jogar?"));
const conteudo = document.querySelector(".conteudo");
let gifJogo = [
  `<img data-test="face-up-image" src="bobrossparrot.gif">`,
  `<img data-test="face-up-image" src="bobrossparrot.gif">`,
  `<img data-test="face-up-image" src="explodyparrot.gif">`,
  `<img data-test="face-up-image" src="explodyparrot.gif">`,
  `<img data-test="face-up-image" src="fiestaparrot.gif">`,
  `<img data-test="face-up-image" src="fiestaparrot.gif">`,
  `<img data-test="face-up-image" src="metalparrot.gif">`,
  `<img data-test="face-up-image" src="metalparrot.gif">`,
  `<img data-test="face-up-image" src="revertitparrot.gif">`,
  `<img data-test="face-up-image" src="revertitparrot.gif">`,
  `<img data-test="face-up-image" src="tripletsparrot.gif" >`,
  `<img data-test="face-up-image" src="tripletsparrot.gif">`,
  `<img data-test="face-up-image" src="unicornparrot.gif">`,
  `<img data-test="face-up-image" src="unicornparrot.gif">`,
];

while (
  quantidadeDeCartas < 4 ||
  quantidadeDeCartas > 14 ||
  quantidadeDeCartas % 2 !== 0
) {
  quantidadeDeCartas = prompt("Com quantas cartas você quer jogar?");
}

for (let i = 0; i < quantidadeDeCartas; i++) {
  let grid = `
   <div data-test="card class="cartas" onclick='virarCartas(this)'> 
       <div class="frente">
           <img data-test="face-down-image" class="imagem-papagaio" src="back.png">
       </div>
       <div class="verso escondido">
           ${gifJogo[i]}
       </div>
   </div>`;

  sequenciaCartas.push(grid);
}

sequenciaCartas.sort(comparador);

function comparador() {
  return Math.random() - 0.5;
}

conteudo.innerHTML = sequenciaCartas.join("");

function virarCartas(elemento) {
  elemento.classList.add("virar");
  click++;

  if (cartaSelecionada !== undefined) {
    cartasIguais(cartaSelecionada, elemento);
  } else {
    cartaSelecionada = elemento;
  }
}

function cartasIguais(carta1, carta2) {
  cartaSelecionada = undefined;

  if (carta1.innerHTML === carta2.innerHTML) {
    carta1.removeAttribute("onclick");
    carta1.removeAttribute("onclick");
    certo += 2;

    if (quantidadeDeCartas === certo) {
      setTimeout(function () {
        alert(`Parabéns. Você ganhou! `);
      }, 500);
    }
  } else {
    setTimeout(function () {
      carta1.classList.remove("virar");
      carta2.classList.remove("virar");
    }, 1000);
  }
}
