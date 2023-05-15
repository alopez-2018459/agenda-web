const header = document.getElementById('navBar');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
})