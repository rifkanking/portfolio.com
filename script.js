const navbar = document.getElementById('navigation');
const hideNavigation = document.getElementById('hideNavigation');
const chatBtn = document.getElementById('chatBtn');

window.addEventListener('scroll', e => {
    if(window.scrollY >= 380) {
        hideNavigation.style.height = '';
        chatBtn.style.right = '50px';
    } else {
        hideNavigation.style.height = '0px';
        chatBtn.style.right = '-100px';
    }
})