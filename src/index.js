"use strict";
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)

  createGifts();

  const giftForm = document.querySelector("#gift-form");
  giftForm.addEventListener("submit", createGiftHandler);
})

function createGiftHandler(event) {
  event.preventDefault();
  const userInputGiftName = document.querySelector("#gift-name-input").value;
  const userInputGiftImg = document.querySelector("#gift-image-input").value;
  const newId = function() {
    if (gifts.length > 0) {
      return (gifts[gifts.length -1].id) + 1;
    }
    return 1;
  }();
  const newGift = {
    id: newId,
    name: userInputGiftName,
    image: userInputGiftImg
  };
  gifts.push(newGift);
  createGift(newGift, document.querySelector(".gift-list"));
}

function createGift(gift, listGifts) {
  const newGiftItem = document.createElement("li");
    newGiftItem.textContent = gift.name;
    const giftImg = document.createElement("img");
    giftImg.src = gift.image;
    newGiftItem.appendChild(giftImg);
    listGifts.appendChild(newGiftItem);
}

function createGifts() {
  const listGifts = document.querySelector(".gift-list");
  for (let i = 0; i < gifts.length; i++) {
    createGift(gifts[i], listGifts);
  }

}
