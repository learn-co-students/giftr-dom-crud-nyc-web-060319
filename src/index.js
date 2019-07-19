function displayGifts(hash, keyword) {
  let giftList = document.querySelector('.gift-list')
  let theGifts = giftList.children
    hash.forEach(function(g){
      if (g["name"].includes(keyword)) {
        //add the name
        const newLi = document.createElement('li')
        const newName = document.createElement('p')
        newName.innerHTML = g["name"]
        //add the image
        const newPic = document.createElement('img')
        newPic.setAttribute('src', g["image"])
        newPic.setAttribute('id', "picture")
        //add the delete button
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = "Delete"
        //add the edit button
        const editButton = document.createElement('button')
        editButton.innerHTML = "Edit"
        //append to the list
        newLi.appendChild(newName)
        newLi.appendChild(newPic)
        newLi.appendChild(editButton)
        newLi.appendChild(deleteButton)
        //listen to delete button
        deleteButton.addEventListener('click', function(event) {
          newLi.remove()
        })
        //listen to edit button
        editButton.addEventListener('click', function(event) {
            newLi.children[0].innerHTML = prompt();
        })

        //add list item to list
        giftList.appendChild(newLi)
    }}

)}

function changeDisplay(listOfGifts, search) {
  size = listOfGifts.length
  for (let i = 0;i < size;i++) {
     listOfGifts[0].remove()
   }
  if (search === ""){
     displayGifts(gifts, "")
  }
  else {
      displayGifts(gifts, search)
   }
}

document.addEventListener('DOMContentLoaded', () => {
  displayGifts(gifts, "")
  const searchForm = document.querySelector('#filter-input')
  let giftList = document.querySelector('.gift-list')
  let theGifts = giftList.children

  searchForm.addEventListener('change', function(event) {
      let search = searchForm.value
      changeDisplay(theGifts, search)
  })

  const newGiftForm = document.querySelector('#gift-form')
  newGiftForm.addEventListener('submit', function(event){
    event.preventDefault()
    giftName = document.querySelector('#gift-name-input').value
    giftPic = document.querySelector('#gift-image-input').value
    newId = gifts.length + 1
    gifts.push({id: newId, name: giftName, image: giftPic})
    document.querySelector('#gift-name-input').value = ""
    document.querySelector('#gift-image-input').value = ""
    changeDisplay(theGifts, "")
  })

})
