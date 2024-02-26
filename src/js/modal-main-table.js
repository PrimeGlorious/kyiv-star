(() => {
  const refs = {
    openMainTableModalBtn: document.querySelector(
      '[data-main-modal-table-open]'
    ),
    openSecondMainTableModalBtn: document.querySelector(
      '[data-main-modal-table-open-second]'
    ),
    closeMainTableModalBtn: document.querySelector(
      '[data-main-modal-table-close]'
    ),
    modalMainTable: document.querySelector('[data-main-table-modal]'),
  };
  refs.openMainTableModalBtn.addEventListener('click', toggleModal);
  refs.openSecondMainTableModalBtn.addEventListener('click', toggleModal);
  refs.closeMainTableModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modalMainTable.classList.toggle('is-hidden');
  }
})();
