console.log("FitTrack ready");

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});



const circles = document.querySelectorAll('.circle');
const selectedColorInput = document.getElementById('selectedColor');

circles.forEach(circle => {

  circle.addEventListener('click', () => {

    
    circles.forEach(c => c.classList.remove('active'));

    
    circle.classList.add('active');

    
    selectedColorInput.value = circle.dataset.color;

  });

});
