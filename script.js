const buttonsOpen = document.querySelectorAll('.click-me');
const buttonsClose = document.querySelectorAll('.close-modal');
const closeModal = document.querySelectorAll('.modal-background');

buttonsOpen.forEach(item => item.addEventListener('click', e => e.currentTarget.parentElement.nextElementSibling.classList.add('show')));

buttonsClose.forEach(item => item.addEventListener('click', e => e.currentTarget.closest('.modal-container').classList.remove('show')));

closeModal.forEach(item => item.addEventListener('click', e => e.currentTarget.closest('.modal-container').classList.remove('show')));