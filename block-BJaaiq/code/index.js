
  
let root  = document.querySelector('ul');
let index = 0;
function createUi(parent, data ){
    for(let i = 0; i<3 ; i++){
        let  li = document.createElement('li');
        let h2  = document.createElement('h2');
        h2.innerText = data[index].quoteText;
        let p  = document.createElement('p');
        p.innerText = data[index].quoteAuthor;
        li.append(h2, p);
        parent.append(li);
        index++;
    }
}


window.addEventListener('scroll',()=>{
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    if(scrollTop + clientHeight >= scrollHeight && index< quotes.length){
        createUi(root, quotes );
        window.scrollBy(0 , -20)
    }
    // if(root.scrollTop + root.clientHeight >= root.scrollHeight){
      
        
    // }
});

window.addEventListener('DOMContentLoaded' , ()=>{
    alert('The Content is loaded in the Dom');
    createUi(root, quotes );
})



