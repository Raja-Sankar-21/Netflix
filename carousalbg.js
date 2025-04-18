document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carouselExampleIndicators");
    const bgLayer = document.createElement("div");
    bgLayer.id = "carousel-background";
    document.body.prepend(bgLayer);
  
    function updateBackground() {
      const activeItem = carousel.querySelector(".carousel-item.active");
      const bgImage = activeItem.getAttribute("data-bg");
      if (bgImage) {
        bgLayer.style.backgroundImage = `url('${bgImage}')`;
      }
    }
  
    carousel.addEventListener("slid.bs.carousel", updateBackground);
    updateBackground();
  });
  