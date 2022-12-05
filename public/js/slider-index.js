const slider=document.getElementById('slider')
let sliderSection=document.querySelectorAll(".slider__section");
let sliderSectionLast=sliderSection[sliderSection.length-1];
const btnLeft=document.getElementById('btn__left');
const btnRigth=document.getElementById('btn__rigth');
slider.insertAdjacentElement('afterbegin',sliderSectionLast)