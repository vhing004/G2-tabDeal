var learnMore = document.querySelectorAll('.itemContent-btn')
var clode = document.querySelector('.popUp-head ion-icon')
var popUpShow = document.querySelector('.popUp')

learnMore.forEach((btn, index) => {
    btn.addEventListener('click', ()=>{
        popUpShow.classList.add('show')
    })
})
clode.onclick = function(){
    popUpShow.classList.remove('show')
}
document.addEventListener('keydown', (event) => {
    if(event.keyCode == 27){
    popUpShow.classList.remove('show')
    }
})