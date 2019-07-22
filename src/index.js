document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)

  let nameInput = document.getElementById("gift-name-input")
  let imageInput = document.getElementById("gift-image-input")
  let list = document.getElementById("gift-list")
  let img = document.getElementsByTagName("img")
  let searchInput = document.getElementById("filter-input")

function individualGifts(gifts){
  gifts.forEach((gift, id) => {
    showGift(gift, id)
  })
};

function showGift(gift){
  let li = document.createElement("li")
  li.dataset.id = gift.id
  list.append(li)
  li.innerHTML =
    `<p id="name" data-id=${gift.id}>${gift.name}</p>
    <img class="img" data-id=${gift.id} src=${gift.image}>
    <form id="edit-gift-form" class="ui form" action="index.html" method="POST" display="none">
      <label for="name">Gift Name: </label>
      <input id="gift-name-input" type="text" name="name" value="">
      <label for="image">Gift Image: </label>
      <input id="gift-image-input" type="text" name="image" value="">
      <br>
    </form>
    <button class="button" id="edit" data-id=${gift.id}>Edit Gift</button>
    <button class="button" id="delete" data-id=${gift.id}>Delete</button>
    <br>
    <br>`
};

document.addEventListener("submit",createGift)

function createGift(e){
  e.preventDefault()
  showGift({name: nameInput.value, image: imageInput.value})
}

list.addEventListener("click", updateGifts)
searchInput.addEventListener("input", searchGifts)

function updateGifts(e){
  e.preventDefault()
  if(e.target.id === 'edit'){
        editGift(e)
          }
  else if(e.target.id === 'delete') {
        deleteGift(e)
    }
    // else if(e.target.id === 'edit-gift-form'){
    //   editGift(e)
    // }
}

function editGift(e){
  console.log(e)
  //first grab the inputs
  const nameInput = e.target.parentElement.querySelector('#gift-name-input').value
  //this is the input the user puts in "cat"
  const imageInputValue = e.target.parentElement.querySelector('#gift-image-input').value

  // fetch('url/:idofgift', {
  //   method: PATCH,
  //   headers: {
  //           'Content-Type': 'application/json',
  //           accept: 'application/json',
  //   },
  //   body: JSON.stringify({
  //     name: nameInput,
  //     image: imageInputValue
  //   })
  //   .then(resp => resp.json)
  //   .then(JSON =>
  //     e.target.parentElement.querySelector('p').innerText = json.name
  //     e.target.parentElement.querySelector('img').src = json.image
  //   )
  // )}

  const name = e.target.parentElement.querySelector('#name')
  //we want to grab the img tag, so that we can reset its src string equal to the new input
  // console.log(e.target.parentElement.querySelector(".img").src)
  e.target.parentElement.querySelector(".img").src = imageInputValue
  // const newNameInput =  e.target.parentElement.querySelector('#gift-name-')
  // const name = e.target.parentElement.querySelector('#name')
  name.innerText = nameInput
  // e.target.parentElement.querySelector('img')
  //
}

function searchGifts(e){
  console.log(e.target.value)
  let filteredGifts = gifts.filter(gift => gift.name.includes(e.target.value))
  list.innerHTML = ''
  filteredGifts.forEach(showGift)
}

function deleteGift(e){
  e.target.parentElement.remove()
};

individualGifts(gifts)
})
