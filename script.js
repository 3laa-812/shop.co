document.addEventListener("DOMContentLoaded", () => {
  // Close the top bar
  function closeTopBar() {
    const topBar = document.querySelector(".top-bar");
    topBar.classList.add("closing");
    setTimeout(() => {
      topBar.style.display = "none";
    }, 1000);
  }
  document.getElementById("closeTopBar").addEventListener("click", closeTopBar);

  // Toggle the sidebar menu
  const menuIcon = document.getElementById("menuIcon");
  const mainNav = document.getElementById("mainNav");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    mainNav.classList.toggle("active");
  });

  // Toggle the search bar
  const searchIcon = document.getElementById("searchIcon");
  const searchBar = document.getElementById("searchBar");

  searchIcon.addEventListener("click", () => {
    searchIcon.classList.toggle("active");
    searchBar.classList.toggle("active");
  });

  // Scroll to top button
  const upBtn = document.getElementById("topBarButton");

  function toggleUpButton() {
    upBtn.style.display = window.scrollY === 0 ? "none" : "block";
  }

  window.addEventListener("scroll", toggleUpButton);
  window.addEventListener("load", toggleUpButton);

  upBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Activate statistics counter on scroll
  let statsNumbers = document.querySelectorAll(".stats-container .stat-item h2 span");
  let heroSection = document.querySelector(".hero-section");
  let hasStarted = false;

  window.onscroll = function () {
    if (window.scrollY >= heroSection.offsetTop - 300 && !hasStarted) {
      let maxGoal = Math.max(...Array.from(statsNumbers, (num) => +num.dataset.goal));
      statsNumbers.forEach((num) => startCounter(num, maxGoal));
      hasStarted = true;
    }
  };

  function startCounter(element, maxGoal) {
    let goal = +element.dataset.goal;
    let duration = 2000;
    let stepTime = 10;
    let step = (goal / maxGoal) * (stepTime / duration) * maxGoal;
    let current = 0;

    let counter = setInterval(() => {
      current += step;
      element.textContent = Math.floor(current);

      if (current >= goal) {
        element.textContent = goal;
        clearInterval(counter);
      }
    }, stepTime);
  }

  // Display customer feedback
  const customerReviews = [
    {
      title: "Roaa",
      paragraph: "The quality of the products exceeded my expectations! The delivery was fast, and the service was excellent."
    },
    {
      title: "nour saad",
      paragraph: "I love the variety of styles available. The shopping experience was seamless, and everything arrived on time."
    },
    {
      title: "laila zamel",
      paragraph: "Great store with trendy fashion items! I found exactly what I was looking for at a great price."
    },
    {
      title: "eman",
      paragraph: "Amazing shopping experience! The material and fit of the clothes are just perfect. Highly recommended!"
    },
    {
      title: "Sara",
      paragraph: "Finally, a store that offers stylish clothes at reasonable prices. I’ll definitely be coming back for more."
    }
  ];

  function displayCustomerReviews(reviews, containerClass) {
    const container = document.querySelector(containerClass);

    reviews.forEach((review) => {
      const frame = document.createElement("div");
      frame.classList.add("frame");
      frame.innerHTML = 
        <div class="yellowstar">
          ${"<i class='fa-solid fa-star'></i>".repeat(5)}
        </div>
        <h2>${review.title} <span><i class="fa-solid fa-circle-check"></i></span></h2>
        <p>${review.paragraph}</p>
      ;
      container.appendChild(frame);
    });
  }

  displayCustomerReviews(customerReviews, ".checkcollect");

  // Scroll buttons control
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");
  const scrollAmount = 300;

  function updateScrollButtons() {
    leftBtn.disabled = checkcollectContainer.scrollLeft <= 0;
    rightBtn.disabled =
      checkcollectContainer.scrollLeft + checkcollectContainer.clientWidth >=
      checkcollectContainer.scrollWidth;
  }

  rightBtn.addEventListener("click", () => {
    checkcollectContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(updateScrollButtons, 300);
  });

  leftBtn.addEventListener("click", () => {
    checkcollectContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    setTimeout(updateScrollButtons, 300);
  });

  updateScrollButtons();
});ه





و