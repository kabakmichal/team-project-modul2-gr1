(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-team-open]'),
    closeModalBtn: document.querySelector('[data-modal-team-close]'),
    modal: document.querySelector('[data-modal-team]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // document.addEventListener('keydown', e => {
  //   if (e.code === 'Escape') {
  //     refs.modal.classList.add('is-hidden');
  //     document.removeEventListener('keydown');
  //   }
  // });

  document.addEventListener('click', clickOutOfModal);
  document.addEventListener('keydown', escapePush);

  function clickOutOfModal(e) {
    if (e.target === refs.modal)
    {
      toggleModal();
    }
  }

 function escapePush(e) {
  if(e.code === 'Escape')
  {
      toggleModal();
  }
}
 
function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.removeEventListener('keydown', escapePush);
  }
})();
