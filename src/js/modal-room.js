(() => {
  const refs = {
    openRoomModalBtn: document.querySelector('[data-room-modal-open]'),
    closeRoomModalBtn: document.querySelector('[data-room-modal-close]'),
    modalRoom: document.querySelector('[data-room-modal]'),
  };
  refs.openRoomModalBtn.addEventListener('click', toggleModal);
  refs.closeRoomModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modalRoom.classList.toggle('is-hidden');
  }
})();
