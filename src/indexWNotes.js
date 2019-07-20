document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM has been fully loaded')
    console.table(gifts)
  
  
    //  https://en.wikipedia.org/wiki/Painting#/media/File:Piet_Mondriaan,_1921_-_Composition_en_rouge,_jaune,_bleu_et_noir.jpg
    
    
    let counter = 5;
    const ulContainer = document.querySelector('.gift-list');
    let createForm = document.querySelector("#gift-form");
    const searchForm = document.getElementById("search-btn");
    // let AllLIs = (document.querySelectorAll(".gift-list li"));
    // let AllLIs = (document.querySelectorAll("li"));
  
      // ^ only getting hardcoded LI "No gifts yet"
  
  
    // console.log((Array.from(AllLIs))[0])
    //     for (let i = 0; i < Array.from(AllLIs).length; i++) {
    //       console.log(AllLIs[i].textContent);
    //     }
  
    console.log("create Form is:  ", createForm);
    // console.log("gift name is:  ", createNewGiftName);
    console.log("ul container is:  ", ulContainer);
    console.log("search form is:  ", searchForm);
    
    createForm.addEventListener('submit', createGift); 
    searchForm.addEventListener('click', searchGifts); 
    
      gifts.forEach(          // notes pg 57
        function(gift) {
          const extantGift = document.createElement('li');
          extantGift.src = gift.image; // Doesn't display anything.
          extantGift.innerText = gift.name;
          //extantGift.innerText = gift[:name];
          // extantGift.img = gift[:image];    // Doesnt like, displays nothing
          // extantGift.name = gift[:name];   // Bracket notation breaks it?!
          ulContainer.appendChild(extantGift);
        }
      )
  
  
  
  
      function createGift(e){
        let createNewGiftName = document.querySelector("#gift-name-input").value;
        let createNewGiftPic = document.querySelector("#gift-image-input").value;
      
        console.log("e.target is : ", e.target);
        e.preventDefault();
        const newGift = document.createElement("li");
        console.log("createnewGift name is: ", createNewGiftName)
        // console.log("newGift is: ", newGift)
        newGift.innerText = createNewGiftName;
        newGift.src = createNewGiftPic;
        newGift.setAttribute("id", counter);
        ulContainer.appendChild(newGift);
       
  
        appendDeleteButton(newGift);
        appendEditButton(newGift);
        appendImage(newGift);
        
        console.log("createnewGiftPic is: ", createNewGiftPic)
        createNewGiftName.value = "";
        createNewGiftPic.value = "";
        counter ++;
      }
  
      function appendImage(newListItem){
        let createNewGiftPic = document.querySelector("#gift-image-input").value;
        console.log("reateNewGiftPic is:  ", createNewGiftPic);
  
        let pic = document.createElement("img");
        pic.src = createNewGiftPic;
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
        //e.preventDefault();  // Don't need bc button?
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.setAttribute("id", `delete-${newListItem.id}`);
        newListItem.appendChild(deleteButton);
  
        deleteButton.addEventListener('click', function (){
          newListItem.remove();
        })
  
      }
  
      function searchGifts(e){  
        console.log("E is: ", e)
        e.preventDefault    
        const searchTerm = document.querySelector("#filter-input")
        console.log("Search term is: ", searchTerm);
        console.log("Search term value is: ", searchTerm.value);
        let AllLIs = Array.from(document.getElementsByTagName("li"));
        console.log("AllLIs is: ", AllLIs);
  
        while( ulContainer.firstChild ){
          ulContainer.removeChild( ulContainer.firstChild );
        }
  
  
        if (AllLIs.forEach(function(element) 
        {
          console.log("Element is: ", element)
          console.log("Element innerText is: ", element.innerText)
          console.log("searchTerm.value  is: ", searchTerm.value)
  
          if ((element.innerText).includes(searchTerm.value)) {
            console.log("Success")
            lel = document.createElement("li");
            lel.innerText = element.innerText;
            ulContainer.appendChild(lel);
          }   
  
        } ));
        
        //console.log("AllLIs length before if is: ", AllLIs.length);
  
        if ( (Array.from(document.getElementsByTagName("li")).length) === 0 ) {
          console.log("Success ----")
          lel = document.createElement("li");
          lel.innerText = "No search results found.";
          ulContainer.appendChild(lel);
        } // got "unexpected }" (the one that closed )
  
  
            // Q: didn't like this nested, hard to nest ifs & anon funcs? 
  
            // if (AllLIs.forEach(function(element) 
            // {
            //   console.log("Element is: ", element)
            //   console.log("Element innerText is: ", element.innerText)
            //   console.log("searchTerm.value  is: ", searchTerm.value)
  
            //   if ((element.innerText).includes(searchTerm.value)) {
            //     console.log("Success")
            //     lel = document.createElement("li");
            //     lel.innerText = element.innerText;
            //     ulContainer.appendChild(lel);
            //   })   
  
            // } else {
            //   lel = document.createElement("li");
            //   lel.innerText = "No search results found.";
            //   ulContainer.appendChild(lel);
            // }); // got "unexpected }" (the one that closed )
  
  
  
  
  
            // if (AllLIs.forEach(doSearch(element))) {
            //   console.log("Success")
            //   // if (searchTerm.include(element)) {
            //   //   lel = document.createElement("li");
            //   //   lel.innerText = element;
            //   //   ulContainer.appendChild(lel);
            //   // } else {
            //   //   lel = document.createElement("li");
            //   //   lel.innerText = "No search results found.";
            //   //   ulContainer.appendChild(lel);
            //   // }  
            // } 
  
            // function doSearch(elemt){
            //   if (searchTerm.include(elemt)) {
            //     lel = document.createElement("li");
            //     lel.innerText = elemt;
            //     ulContainer.appendChild(lel);
            //   } else {
            //     lel = document.createElement("li");
            //     lel.innerText = "No search results found.";
            //     ulContainer.appendChild(lel);
            //   }
            // }
            
  
  
      }     // end searchGifts
  
      // Had to move down Headers, need to create LIs and append 
      // for them to show up in AllLIs. 
      let AllLIs = (document.getElementsByTagName("li"));
      console.log("All LIs : ", AllLIs);
      console.log("All LIs [0] : ", AllLIs[0]);
      console.log("All LIs [1] : ", AllLIs[1]);
      // console.table(AllLIs);
  
  })
  
  
  
  
  // Welcome to Giftr™! Please build out the following features without persistence. 
  //We'll just be focusing on DOM CRUD without persisting any changes to a server.
  
  // In src/giftData.js is all the gift data. Build out the following features:
  
  // *Get pic to display* - sA user should be able to see all of the gift data on initial page load
  // A user should be able to search for and filter particular gifts with names that include a particular search query.
  // OK  - A user should be able to create a particular gift.
  // OK -- A user should be able to delete a particular gift.
  // *Edit to change picture / not use prompt*  
  //  ^ -  A user (any user, don't worry about authorization) should be able to edit a gift's details.