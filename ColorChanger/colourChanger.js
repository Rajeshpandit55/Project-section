const buttons=document.querySelectorAll('.button');
//console.log(buttons);
const body=document.querySelector("body")


buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(s){
        console.log(s);
        console.log(e.target);
        if(e.target=='grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target=='yellow'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target=='white'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target=='blue'){
            body.style.backgroundColor=e.target.id;
        }
        
    });
});