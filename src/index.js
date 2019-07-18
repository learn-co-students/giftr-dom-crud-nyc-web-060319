document.addEventListener('DOMContentLoaded', () => {
  const giftList = document.querySelector('.gift-list')

  function getGifts(){
    gifts.map(function(gift){
      const giftListItem = document.createElement('li')
      giftListItem.innerText = gift.name
      // debugger
       giftList.appendChild(giftListItem)
    })
  }
getGifts();


const form = document.getElementById("gift-form")

document.addEventListener("submit", function(event){
  event.preventDefault();
  const newGiftValue = document.getElementById('gift-name-input').value
    const newGiftItem = document.createElement('li')
    newGiftItem.innerText = newGiftValue
  giftList.appendChild(newGiftItem)
  deleteGift(newGiftItem);
  editGiftItem(newGiftItem);
})

function deleteGift(newGiftItem){
  event.preventDefault();
  const deleteButton = document.createElement('button')
  deleteButton.innerText = "Delete"
  newGiftItem.appendChild(deleteButton)
  deleteButton.addEventListener("click", function(){newGiftItem.remove();

  })}


function editGiftItem(newGiftItem){

  const editButton = document.createElement('button')
  editButton.innerHTML = "Edit"
  newGiftItem.appendChild(editButton)

  editButton.addEventListener("click", function(){ newGiftItem.innerHTML = window.prompt();


  })
}


}) //ends outer function
