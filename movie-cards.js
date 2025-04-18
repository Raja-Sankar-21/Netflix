document.addEventListener("DOMContentLoaded", () => {
  const movieCards = document.querySelectorAll(".movie-cards");
  const modalTitle = document.getElementById("movieModalLabel");
  const modalMeta = document.getElementById("modalMeta");
  const modalImg = document.getElementById("modalImg");
  const modalDesc = document.getElementById("modalDesc");

  movieCards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.getAttribute("data-title");
      const meta = card.getAttribute("data-meta");
      const desc = card.getAttribute("data-desc");
      const imgSrc = card.getAttribute("src");

      modalTitle.textContent = title;
      modalMeta.textContent = meta;
      modalImg.src = imgSrc;
      modalDesc.textContent = desc;

      const movieModal = new bootstrap.Modal(document.getElementById("movieModal"));
      movieModal.show();
    });
  });
});