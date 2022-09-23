//On scroll to TOP

let topBtn = document.querySelector('.top-btn');
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
window.onscroll = () =>
  window.scrollY > 500
    ? (topBtn.style.opacity = 1)
    : (topBtn.style.opacity = 0);

const toTop = () =>
  window.scrollTo({ top: 100, left: 100, behavior: 'smooth' });

  export{toTop}