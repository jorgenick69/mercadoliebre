const slider=document.getElementById('slider')
let sliderSection=document.querySelectorAll(".slider__section");
let sliderSectionLast=sliderSection[sliderSection.length - 1];
const btnLeft=document.querySelector('#btn__left');
const btnRigth=document.querySelector('#btn__rigth');
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
let sliderSectionFirst=document.querySelectorAll('.slider__section')[0];
slider.style.marginLeft="-200%"
slider.style.transition="all 0.5s"
setTimeout(()=>{
    slider.style.transition="none"
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft="-100%"
}, 500)
}
function Previus(){
    let sliderSection=document.querySelectorAll(".slider__section");
    let sliderSectionLast=sliderSection[sliderSection.length - 1];
slider.style.marginLeft="0%"
slider.style.transition="all 0.5s"
setTimeout(()=>{
    slider.style.transition="none"
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft="-100%"
}, 500)
}

btnRigth.addEventListener("click",()=>{
    Next();
}
)
btnLeft.addEventListener("click",()=>{
    Previus();
})
setInterval(()=>{
    Next();
},5000)