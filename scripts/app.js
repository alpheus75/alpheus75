/** checking the span inputs and displaying them */
const mySpan = document.getElementById('typed-span');
const spanItems = mySpan.getAttribute('data-typed-items').split(',');
let index = 1;

console.log(spanItems);

function changeText(){
    mySpan.textContent = spanItems[index];
    index = (index + 1) % spanItems.length;
}

setInterval(changeText, 2000);


const navbar = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


//hamburger menu script
const hamburger = document.querySelector('.hamburger');
const navbarItems = document.querySelector('.navbar-items');
const link = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navbarItems.classList.toggle('show');
  hamburger.classList.toggle('active');
});

link.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navbarItems.classList.remove('show');
  });
});

//counter section counters 
const countEl = document.querySelectorAll('.counter-num');

countEl.forEach(countEl => {
  let counter = 0;
  const countValue = parseInt(countEl.getAttribute('data-value'));
  const interval = setInterval(() => {
    if (counter < countValue) {
      counter++;
      countEl.textContent = counter;
    } else {
      clearInterval(interval);
    }
  }, 100);
});
