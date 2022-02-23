let  root = document.querySelector('.userCard-Contianer');
let form = document.querySelector('form');
let title = document.querySelector('#noticeTitle');
let category = document.querySelector('#noticeCategory');
let userData = [];


function  createUi(parentElement ,data ){
    root.innerHTML = "";
  data.forEach((eachItem , index) =>{
    let userCard  = document.createElement('div');
    userCard.classList.add('user-card');

    let userCategory = document.createElement('p');
    userCategory.setAttribute('id' , index);
    userCategory.innerText = eachItem.category ;

    let editCategory  = document.createElement('input');  
    editCategory.style.display = "none";

    let userTitle  = document.createElement('h2');
    userTitle.setAttribute('id' ,index);
    userTitle.innerText = eachItem.title;

    let editTitle  =document.createElement('input');
    editTitle.style.display = "none";

    userCard.append(userCategory,editCategory , userTitle, editTitle);

    userTitle.addEventListener('click' , (eventTitle)=>{
        eventTitle.target.style.display = "none";
        editTitle.value = eachItem.title;
        editTitle.style.display = "block";
        editTitle.addEventListener("keypress" , (event)=>{
            if(event.keyCode ===13){
             eachItem.title = editTitle.value;   
             console.log(eachItem.title);
              editTitle.style.display= "none";
              eventTitle.target.innerText = editTitle.value; 
              eventTitle.target.style.display = "block";
            }
        });
        
    })
    userCategory.addEventListener('click' , (eventCategory)=>{
        eventCategory.target.style.display = "none";
        editCategory.value = eachItem.category;
        editCategory.style.display = "block";
        editCategory.addEventListener("keypress" , (event)=>{
            if(event.keyCode ===13){
             eachItem.category = editCategory.value;   
              editCategory.style.display= "none";
              eventCategory.target.innerText = editCategory.value; 
              eventCategory.target.style.display = "block";
            }
        });
        
    })
    parentElement.append(userCard);
    return userCard;
  });
}


//  making a constructor function for maiking objects 
function CreateObj(title,category){
    this.title  = title ;
    this.category = category ;
}

form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    let title  = form.elements[0].value;
    let category = form.elements[1].value;
    let obj =  new CreateObj(title,category);
    userData.push(obj);  
    // calling the function so it will make   the user interface 
    createUi(root , userData);
})