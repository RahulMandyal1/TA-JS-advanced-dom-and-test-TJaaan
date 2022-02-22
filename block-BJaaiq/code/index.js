
let root  = document.querySelector('ul');
function createUi(parent, eachQuote){
     let  li = document.createElement('li');
     let h2  = document.createElement('h2');
     h2.innerText = eachQuote.quoteText;
     let p  = document.createElement('p');
     p.innerText = eachQuote.quoteAuthor;
     li.append(h2, p);
     parent.append(li);
     return li ;
}
function laodContent(){
    root.innerHTML ="";
     quotes.forEach(eachQuote => {
            createUi( root, eachQuote);
    });
}
window.addEventListener('scroll',()=>{
    if(root.scrollTop + root.clientHeight >= root.scrollHeight){
        laodContent();
        
    }
});




