let nav = document.querySelector('.help');
window.addEventListener('scroll',()=>{
    if(window.scrollY > 70){
        nav.classList.add('show');
    }
    else{
        nav.classList.remove('show');
    }
})
