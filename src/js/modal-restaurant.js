(() => {
  const refs = {
    openRestaurantModalBtn: document.querySelector(
      '[data-restaurant-modal-open]'
    ),
    openSecondRestaurantModalBtn: document.querySelector(
      '[data-restaurant-modal-open-second]'
    ),
    closeRestaurantModalBtn: document.querySelector(
      '[data-restaurant-modal-close]'
    ),
    modalRestaurant: document.querySelector('[data-restaurant-modal]'),
  };
  refs.openRestaurantModalBtn.addEventListener('click', toggleModal);
  refs.openSecondRestaurantModalBtn.addEventListener('click', toggleModal);
  refs.closeRestaurantModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modalRestaurant.classList.toggle('is-hidden');
  }
})();
