// for not cleaned up version, see indexWNotes.js 

document.addEventListener('DOMContentLoaded', () => {
  console.table(gifts)

  let counter = 5;
  const ulContainer = document.querySelector('.gift-list');
  let createForm = document.querySelector("#gift-form");
  const searchForm = document.getElementById("search-btn");
  let giftHere;


  console.log("create Form is:  ", createForm);
  console.log("ul container is:  ", ulContainer);
  console.log("search form is:  ", searchForm);
  
  createForm.addEventListener('submit', createGift); 
  searchForm.addEventListener('click', searchGifts); 
  

    gifts.forEach(          
      function(gift) 
      {
        giftHere = gift;
        const extantGift = document.createElement('li');
        extantGift.src = gift.image; 
        extantGift.innerText = gift.name;
        appendDeleteButton(extantGift);
        appendEditButton(extantGift);
        appendImage(extantGift);
        ulContainer.appendChild(extantGift);
      }
    )


    function createGift(e){
      let createNewGiftName = document.querySelector("#gift-name-input").value;
      let createNewGiftPic = document.querySelector("#gift-image-input").value;
    
      e.preventDefault();
      const newGift = document.createElement("li");
      newGift.innerText = createNewGiftName;
      newGift.src = createNewGiftPic;
      newGift.setAttribute("id", counter);
      ulContainer.appendChild(newGift);     

      appendDeleteButton(newGift);
      appendEditButton(newGift);
      appendImage(newGift);
      
      createNewGiftName.value = "";
      createNewGiftPic.value = "";
      counter ++;
    }


    function appendImage(newListItem){
      let createNewGiftPic = document.querySelector("#gift-image-input").value;
      console.log("reateNewGiftPic is:  ", createNewGiftPic);

      let pic = document.createElement("img");
          if (createNewGiftPic) {
            pic.src = createNewGiftPic;
          } 
          if ( giftHere.image  ) {
            pic.src = giftHere.image
          }
      //pic.src = createNewGiftPic;
      newListItem.appendChild(pic);
    }


    function appendEditButton(newListItem){
      //e.preventDefault();  // Don't need bc button?
      const editButton = document.createElement("button");
      editButton.innerText = "Edit";
      editButton.setAttribute("id", `edit-${newListItem.id}`);
      newListItem.appendChild(editButton);

      editButton.addEventListener('click', function (){
        newListItem.innerText = prompt(); 
        appendDeleteButton(newListItem);
        appendEditButton(newListItem);
      })
    }


    function appendDeleteButton(newListItem){
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "X";
      deleteButton.setAttribute("id", `delete-${newListItem.id}`);
      newListItem.appendChild(deleteButton);

      deleteButton.addEventListener('click', function (){
        newListItem.remove();
      })

    }

    function searchGifts(e){  
      e.preventDefault    
      const searchTerm = document.querySelector("#filter-input")
      let AllLIs = Array.from(document.getElementsByTagName("li"));

      while( ulContainer.firstChild ){
        ulContainer.removeChild( ulContainer.firstChild );
      }

      if (AllLIs.forEach(function(element) 
      {

        if ((element.innerText).includes(searchTerm.value)) {
          lel = document.createElement("li");
          lel.innerText = element.innerText;
          ulContainer.appendChild(lel);
        }   
      } ));
      
      if ( (Array.from(document.getElementsByTagName("li")).length) === 0 ) {
        lel = document.createElement("li");
        lel.innerText = "No search results found.";
        ulContainer.appendChild(lel);
      } // got "unexpected }" (the one that closed )
    }     // end searchGifts

    // Had to move down Headers, need to create LIs and append 
    // for them to show up in AllLIs. 
    let AllLIs = (document.getElementsByTagName("li"));
})




