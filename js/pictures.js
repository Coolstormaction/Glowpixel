let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let box = document.querySelector('.box');

let degress = 0;

prev.addEventListener('click', function() {
    degress += 45;
    box.style = `transform: perspective(1000px) rotateY(${degress}deg)`;
})
next.addEventListener('click', function() {
    degress -= 45;
    box.style = `transform: perspective(1000px) rotateY(${degress}deg)`;
})