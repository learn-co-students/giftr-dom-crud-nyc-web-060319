document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded');
  console.table(gifts);

  let giftId = 5;
  
  const giftsList = document.querySelector(".gift-list");
  giftsList.style.textAlign = "center";

  document.querySelector('#gift-form').addEventListener('submit', createGift)

  function displayGifts(){
      for(let i = 0 ; i < gifts.length ; i++){
        let gift = document.createElement('li');
        gift.innerText = gifts[i].name;
        gift.style.textDecoration ="none";
        gift.style.textTransform = "capitalize";
        let giftImage = document.createElement('img');
        giftImage.src = gifts[i].image;
        giftImage.style.width = '10em';
        giftImage.style.display = 'block';
        gift.appendChild(giftImage);
        giftsList.appendChild(gift);
      }
    }


  function createGift(e){
    e.preventDefault();
    let nameInput = document.getElementById('gift-name-input');
    let imageInput = document.getElementById('gift-image-input');
    gifts.push({id: giftId++, name: nameInput.value, image: imageInput.value})
    nameInput.innerText = "";
    imageInput.innerText = "";
    displayGifts();
  }
  displayGifts();
})
