let submitData = document.querySelector(".submit-data");
let form = document.querySelector("form");
let showUserInput = document.querySelector(".userInputContainer");

let userData = [];

function createUi(parentElement, data) {
  let userInput = document.createElement("div");
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
  showUserInput.innerHTML ="";
  event.preventDefault();
  let user = new User(form.elements[0].value);
  userData.push(user);

  // Now iterating over the array and getting  the data

  userData.forEach((eachItem) => {
    createUi(showUserInput, eachItem);
    console.log(eachItem);
    console.log("Hello");
    console.log(eachItem.userItem);
  });
  let  allUserinput = document.querySelectorAll('.userInput');
  allUserinput.forEach(dragCard=>{
      dragCard.addEventListener('dragstart',(event)=>{
         
      })
  })
});


//Now  making  the  user inputs Dragable 


