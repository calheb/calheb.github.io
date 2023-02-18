const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-brightness-high-fill');
    if (this.classList.toggle('bi-moon')) {
        body.style.background = '#2b2b2b';
        body.style.color = 'white';
        body.style.transition = '1s';
    }else{
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
        
    }
})