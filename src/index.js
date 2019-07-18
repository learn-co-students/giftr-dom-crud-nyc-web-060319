document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded');
  console.table(gifts);
  let giftsCopy = gifts.slice();
  let giftId = 5;
  displayGifts(giftsCopy);
  let giftsList = document.querySelector(".gift-list");
  console.log(giftsList)
  document.querySelector('#gift-form').addEventListener('submit', createGift)
  v1 = document.querySelector('#filter-input')
  v1.addEventListener('change', function(e){
    e.preventDefault();	
    console.log(v1.value);	
  })

  function displayGifts(giftsCopy){
      for(let i = 0 ; i < giftsCopy.length ; i++){
        const gift = document.createElement('li');
        gift.innerText = giftsCopy[i].name;
        gift.style.textDecoration ="none";
        gift.style.textTransform = "capitalize";
        let giftImage = document.createElement('img');
        giftImage.src = giftsCopy[i].image;
        giftImage.style.width = '10em';
        giftImage.style.display = 'block';
        gift.appendChild(giftImage);
        let giftsList = document.querySelector(".gift-list");
        giftsList.appendChild(gift);
        deleteGift(gift);
      }
    }

  function deleteGift(gift){
    const deleteBtn = document.createElement("button");
    deleteBtn. innerHTML = "Do Something";
    gift.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', function(){
      gift.remove();
    })
  }

  function createGift(e){
    e.preventDefault();
    let nameInput = document.getElementById('gift-name-input');
    let imageInput = document.getElementById('gift-image-input');
    giftsCopy.unshift({id: giftId++, name: nameInput.value, image: imageInput.value})
    nameInput.innerText = "";
    imageInput.innerText = "";
    displayGifts(giftsCopy);
  }
  
})
