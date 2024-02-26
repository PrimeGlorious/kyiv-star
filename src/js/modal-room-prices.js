(() => {
  const refs = {
    openRoomPricesModalBtn: document.querySelector(
      '[data-room-modal-prices-open]'
    ),
    closeRoomPricesModalBtn: document.querySelector(
      '[data-room-modal-prices-close]'
    ),
    modalRoomPrices: document.querySelector('[data-room-modal-prices]'),
  };
  refs.openRoomPricesModalBtn.addEventListener('click', toggleModal);
  refs.closeRoomPricesModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modalRoomPrices.classList.toggle('is-hidden');
  }
})();
