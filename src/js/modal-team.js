(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-team-open]'),
    closeModalBtn: document.querySelector('[data-modal-team-close]'),
    modal: document.querySelector('[data-modal-team]'),
  };

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    refs.modal.classList.add('is-hidden');
  }
});
  
//   document.addEventListener('click', event => {
//   if (event.target.matches('[data-modal-team-close]') || !event.target.closest('[data-modal-team]')) {
//     refs.modal.classList.add('is-hidden');
//   }
// });
  
  
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
