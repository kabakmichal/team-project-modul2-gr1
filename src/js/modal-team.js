(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-team-open]'),
    closeModalBtn: document.querySelector('[data-modal-team-close]'),
    modal: document.querySelector('[data-modal-team]'),
  };

  refs.openModalBtn.addEventListener('click', e => {
    toggleModal();
    document.addEventListener('keydown', escapePush);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  document.addEventListener('click', clickOutOfModal);

  function clickOutOfModal(e) {
    if (e.target === refs.modal) {
      toggleModal();
    }
  }

  function escapePush(e) {
    if (e.code === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
      toggleModal();
      document.removeEventListener('keydown', escapePush);
    }
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
