document.addEventListener("DOMContentLoaded", function () {
  initSliders();

  initScrollAnimations();

  setupExploreMore();
});

function initSliders() {
  const sliderContainers = document.querySelectorAll(".slider-container");

  sliderContainers.forEach((container) => {
    const slides = container.querySelectorAll(".slide");
    const parentSlider = container.closest(".slider-image");
    const dotsContainer = parentSlider.querySelector(".slider-nav");
    const totalSlides = slides.length;
    let currentIndex = 0;

    dotsContainer.innerHTML = "";

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div");
      dot.className = i === 0 ? "slider-dot active" : "slider-dot";
      dot.dataset.index = i;
      dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll(".slider-dot");

    updateSlider(0);

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        updateSlider(index);
      });
    });

    function updateSlider(index) {
      currentIndex = index;
      const translateValue = `-${index * 100}%`;
      container.style.transform = `translateX(${translateValue})`;

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    let startX, endX;
    container.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    container.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    });

    function handleSwipe() {
      const threshold = 50;

      if (startX - endX > threshold) {
        if (currentIndex < totalSlides - 1) {
          updateSlider(currentIndex + 1);
        }
      } else if (endX - startX > threshold) {
        if (currentIndex > 0) {
          updateSlider(currentIndex - 1);
        }
      }
    }

    setInterval(() => {
      const nextIndex = (currentIndex + 1) % totalSlides;
      updateSlider(nextIndex);
    }, 3000);
  });
}

function initScrollAnimations() {
  const projects = document.querySelectorAll(
    ".CarElderly-mobile-project, .Tripnest-mobile-project"
  );

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
      rect.bottom >= 0
    );
  }

  projects.forEach((project) => {
    project.classList.remove("hidden");
    setTimeout(() => {
      project.classList.add("visible");
    }, 100);
  });

  window.addEventListener("scroll", () => {
    projects.forEach((project) => {
      if (isInViewport(project)) {
        project.classList.add("visible");
      }
    });
  });
}

function setupExploreMore() {
  const exploreButton = document.querySelector(".project-button");
  if (!exploreButton) return;

  exploreButton.addEventListener("click", function (e) {
    e.preventDefault();

    window.location.href = "explore-more.html";
  });
}
