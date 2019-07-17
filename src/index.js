document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)

let numGifts = 0;
const giftList = document.getElementById('gift-list');
const newgiftname = document.getElementById('gift-name-input');
const newgiftlink = document.getElementById('gift-image-input');
const newgiftsubmit = document.getElementById('gift-form-button');
const emptyList = document.getElementById('empty-list')
const filterInput = document.getElementById('filter-input')



// function showGifts(gifts){
//   gifts.forEach(function(gift){
//     showGift(gift)
//   });
// }

// function showGift(gift){
//   giftList.innerHTML +=
//   <li>gift.name
//     <img src="gift.image"></img>
//   </li>
// }



newgiftsubmit.addEventListener('click', (event) => {
    event.preventDefault();
    createNewGift(event);
  })


  const createNewGift = function(){
    const newGift = document.createElement('li');
    newGift.innerText = newgiftname.value;
    giftList.appendChild(newGift)
    // giftList.removeChild(emptyList)
    const newGiftPic = document.createElement('img');
    newGiftPic.src = newgiftlink.value
    newGift.appendChild(newGiftPic)
    emptyList.classList.add('invisible')
    newgiftname.value = "";
    newgiftlink.value = "";
    numGifts ++;
      if (giftList.length == 0){
        emptyList.classList.remove('invisible')
      }
    appendEditButton(newGift)
    appendDeleteButton(newGift)
  }

  function appendDeleteButton(newGift){
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute('id', `Gift-${numGifts}`);
    deleteButton.innerText = "Delete";
    newGift.appendChild(deleteButton);
    deleteButton.addEventListener("click", function(){
      newGift.remove()
  })
  }

  function appendEditButton(newGift) {
    const editButton = document.createElement("button");
    editButton.setAttribute("id", `edit-task-${numGifts}`);
    editButton.innerText = "Edit";
    newGift.appendChild(editButton);
    editButton.addEventListener("click", function(){
      newGift.innerText=prompt();
      appendEditButton(newGift)
      appendDeleteButton(newGift)
    })

  }



  // const deleteGift = function() 















})
