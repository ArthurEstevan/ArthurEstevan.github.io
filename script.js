const button = document.querySelectorAll('.button');
button.forEach((btn) => {
  btn.addEventListener('mouseover', () => {
    btn.style.position = 'absolute';
    btn.style.left = Math.floor(Math.random() * (window.innerWidth - btn.offsetWidth)) + 'px';
    btn.style.top = Math.floor(Math.random() * (window.innerHeight - btn.offsetHeight)) + 'px';
  });

});
