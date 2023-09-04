const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const openModal = () => {
modal.classList.remove('is-hidden');
  modal.classList.add('active'); 
}

const closeModal = () => {
modal.classList.add('is-hidden');
  modal.classList.remove('active'); 
}

modalBtnOpen.addEventListener('click', openModal);
modalBtnClose.addEventListener('click', closeModal);
