let submitData = document.querySelector(".submit-data");
let form = document.querySelector("form");
let showUserInput = document.querySelector(".userInputContainer");

let userData = [];
let index = 0;

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
    dragCard.addEventListener("dragEnter", dragEnter);
    dragCard.addEventListener("dragOver", dragOver);
    dragCard.addEventListener("dragOver", dragLeave);
    dragCard.addEventListener("drop", drop);
  });

  function dragStart(e) {
    this.style.opacity = ".4";
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
  }


  function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }


  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }
  function dragLeave(e) {
    e.target.classList.remove("drag-over");
  }
  function drop(e) {
    // get the draggable element

    const id = e.dataTransfer.getData("text/plain");
    const draggable = document.getElementById(id);
    console.log(draggable);
    // add it to the drop target
    e.target.appendChild(draggable);
     // display the draggable element
     draggable.classList.remove('hide');
  }
});

//Now  making  the  user inputs Dragable
