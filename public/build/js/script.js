document.addEventListener('DOMContentLoaded',function(){
    iniciarJS();
})

function iniciarJS(){
    eventListeners();
    let sizeScreen = screen.width;
    let navegacion = document.querySelector('.nav__menu');
    
    if(sizeScreen >= 480){
        navegacion.classList.remove('ocultar');
    }
}
function eventListeners(){
    const menuMobile = document.querySelector('#menu-mobile');
    menuMobile.addEventListener('click', navegacionResponsive);
    let sizeScreen = window.addEventListener('resize',detectarSizeScreen);
}
function detectarSizeScreen(){
    let screenWidth = screen.width;
    let navegacion = document.querySelector('.nav__menu');
    let scrollHeight = document.documentElement.scrollTop;
    console.log(scrollHeight);
    if(screenWidth >= 480){
        if(document.querySelector('.nav__menu').classList.contains('ocultar')){
            navegacion.classList.remove('ocultar');      
        }
    }
    if(scrollHeight > 100){
        console.log(scrollHeight);
    }
}
function navegacionResponsive(){
    const navegacion = document.querySelector('.nav__menu');
    navegacion.classList.toggle('ocultar');
    
}