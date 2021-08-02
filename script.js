document.addEventListener("DOMContentLoaded", () => {
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let result = document.getElementById("result");
  // Kreiramo nizz slika
  const cardArray = [
    {
      name: "prva",
      img: "images/1.png",
    },
    {
      name: "prva",
      img: "images/1.png",
    },
    {
      name: "druga",
      img: "images/2.png",
    },
    {
      name: "druga",
      img: "images/2.png",
    },
    {
      name: "treca",
      img: "images/3.png",
    },
    {
      name: "treca",
      img: "images/3.png",
    },
    {
      name: "cetvrta",
      img: "images/4.png",
    },
    {
      name: "cetvrta",
      img: "images/4.png",
    },
  ];
  // random
  cardArray.sort(() => 0.5 - Math.random());
  // Kreiramo tablu za igranje
  const grid = document.querySelector(".grid");

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
  // provera da li su iste karte
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    let optionOneId = cardsChosenId[0];
    let optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/empty.png");
      cards[optionTwoId].setAttribute("src", "images/empty.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Try again!");
    }
    cardsChosen = [];
    cardsChosenId = [];
    result.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      result.textContent = "Congratulations, you found them all!";
    }
  }
  // okreni kartu
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosenId.length === 2) {
      setTimeout(checkForMatch, 500);
    }
    console.log(cardsWon);
  }
  createBoard();
});
