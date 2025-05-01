document.addEventListener("DOMContentLoaded", function () {
  initSliders();

  initScrollAnimations();
});

function initSliders() {
  const sliders = document.querySelectorAll(".slider-image");

  sliders.forEach((slider) => {
    const container = slider.querySelector(".slider-container");
    const dots = slider.querySelectorAll(".slider-dot");
    let currentIndex = 0;

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        updateSlider(index);
      });
    });

    function updateSlider(index) {
      currentIndex = index;
      container.style.transform = `translateX(-${index * 33.333}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    setInterval(() => {
      currentIndex = (currentIndex + 1) % dots.length;
      updateSlider(currentIndex);
    }, 3000);
  });
}

function initScrollAnimations() {
  const projects = document.querySelectorAll(
    ".silakbay-project, .clone-project, .travel-tour-project"
  );

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }

  projects.forEach((project) => {
    if (isInViewport(project)) {
      project.classList.add("visible");
    }
  });

  window.addEventListener("scroll", () => {
    projects.forEach((project) => {
      if (isInViewport(project)) {
        project.classList.add("visible");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initSliders();

  initScrollAnimations();

  initExploreMore();
});

function initSliders() {
  const sliders = document.querySelectorAll(".slider-image");

  sliders.forEach((slider) => {
    const container = slider.querySelector(".slider-container");
    const dots = slider.querySelectorAll(".slider-dot");
    let currentIndex = 0;

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        updateSlider(index);
      });
    });

    function updateSlider(index) {
      currentIndex = index;
      container.style.transform = `translateX(-${index * 33.333}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    setInterval(() => {
      currentIndex = (currentIndex + 1) % dots.length;
      updateSlider(currentIndex);
    }, 3000);
  });
}

function initScrollAnimations() {
  const projects = document.querySelectorAll(
    ".silakbay-project, .clone-project, .travel-tour-project, .CarElderly-mobile-project, .Tripnest-mobile-project"
  );

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }

  projects.forEach((project) => {
    if (isInViewport(project)) {
      project.classList.add("visible");
    }
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
  const mobileProjects = document.querySelectorAll(
    ".CarElderly-mobile-project, .Tripnest-mobile-project"
  );

  if (!exploreButton || !mobileProjects.length) return;

  exploreButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Show all hidden mobile projects
    mobileProjects.forEach((project) => {
      project.classList.remove("hidden");

      // After removing hidden class, trigger the animation
      setTimeout(() => {
        project.classList.add("visible");
      }, 100);
    });

    // Scroll to the first mobile project
    const firstMobileProject = document.getElementById("explore-more");
    if (firstMobileProject) {
      firstMobileProject.scrollIntoView({ behavior: "smooth" });
    }

    // Hide the button after it's been clicked
    this.style.display = "none";
  });
}
