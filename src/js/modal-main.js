(() => {
  const refs = {
    openMainModalBtn: document.querySelector('[data-main-modal-open]'),
    openSecondMainModalBtn: document.querySelector(
      '[data-main-modal-open-second]'
    ),
    closeMainModalBtn: document.querySelector('[data-main-modal-close]'),
    modalMain: document.querySelector('[data-main-modal]'),
  };
  refs.openMainModalBtn.addEventListener('click', toggleModal);
  refs.openSecondMainModalBtn.addEventListener('click', toggleModal);
  refs.closeMainModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modalMain.classList.toggle('is-hidden');
  }
})();
