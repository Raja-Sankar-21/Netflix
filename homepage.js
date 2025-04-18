document.addEventListener("DOMContentLoaded", function () {
    const faqCards = document.querySelectorAll('.FAQ-card');
  
    faqCards.forEach(card => {
      const question = card.querySelector('.FAQ-question');
  
      question.addEventListener('click', () => {
        const isActive = card.classList.contains('active');
  
        faqCards.forEach(c => c.classList.remove('active'));
  
        if (!isActive) {
          card.classList.add('active');
        }
      });
    });
  });
  
const carouselItems = document.querySelectorAll('.carousel-item');

function updateBackground() {
  const activeItem = document.querySelector('.carousel-item.active');
  if (activeItem) {
    const bgImage = activeItem.getAttribute('data-bg');
    document.body.style.backgroundImage = `url('${bgImage}')`;
  }
}

setInterval(() => {
  updateBackground();
}, 1000);
