let submitData = document.querySelector(".submit-data");
let form = document.querySelector("form");
let showUserInput = document.querySelector(".userInputContainer");

let userData = [];
let index = 0;
let dragStartIndex;

function createUi(parentElement, data) {
  let userInput = document.createElement("div");
  userInput.setAttribute("draggable", "true");
  userInput.setAttribute("id", `card${index++}`);
  userInput.innerText = data.userItem;
  userInput.classList.add("userInput");
  parentElement.append(userInput);
}

// Create a constructor function to create an object
function User(item) {
  this.userItem = item;
}

//Store the data in the userData Object  on the click of button

form.addEventListener("submit", (event) => {
  showUserInput.innerHTML = "";
  event.preventDefault();
  let user = new User(form.elements[0].value);
  userData.push(user);

  // Now iterating over the array and getting  the data

  userData.forEach((eachItem) => {
    createUi(showUserInput, eachItem);
  });
  let allUserinput = document.querySelectorAll(".userInput");
  
  allUserinput.forEach((dragCard) => {
    dragCard.addEventListener("dragstart", dragStart);
    dragCard.addEventListener("dragenter", dragEnter);
    dragCard.addEventListener("dragover", dragOver);
    dragCard.addEventListener("drop", drop);
    dragCard.addEventListener("dragend", DragEnd);
  });

  //Drag function gets called when  the  dragstart event is gets trigerred 
  // It only gets trigerred when the user drag on a user card
  function dragStart(e) {
    this.style.opacity = ".4";
    dragStartIndex = this;
  }

//This function only used to prevent  the default action 
  function dragEnter(e) {
    e.preventDefault();
    // console.log('Drag enter Event Fires ');
  }


//This function only used to prevent  the default action 
  function dragOver(e) {
    e.preventDefault();
    // console.log('Drag  Over Event  Fires ');
  }

  //This function gets trigerred and is responsible for  the user card swapping here we have just 
  // the innHTMl of both the dragged card and where the dragged event is stops that card InnerHTML
  function drop(e) {
    const  dragEndContent = this.innerHTML ;
    let swapContent = dragEndContent ;  
    this.innerHTML = dragStartIndex.innerHTML ;
    dragStartIndex.innerHTML = swapContent ; 
    // console.log('drop event gets fired here ');
  }

  //In this function we have given  the full opacity so it can be easily visible to user 
  function DragEnd(){
    this.style.opacity  = "1";
  }
});

//Now  making  the  user inputs Dragable
