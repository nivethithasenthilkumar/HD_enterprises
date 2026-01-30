// SLIDE IN + COUNT ANIMATION
const cards = document.querySelectorAll(".dashboard-card");
// SLIDE ANIMATION
const boxes = document.querySelectorAll(".content-box");
const counters = document.querySelectorAll(".count");
const animatedItems = document.querySelectorAll(
  ".fade-left, .fade-right"
);

animatedItems.forEach(item => observer.observe(item));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      const count = entry.target.querySelector(".count");
      if (count) animateCount(count);

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

boxes.forEach(box => observer.observe(box));
counters.forEach(c => observer.observe(c.parentElement));

// COUNT ANIMATION
function animateCount(el) {
  const target = +el.dataset.target;
  let current = 0;
  const speed = target / 80;

  const update = () => {
    current += speed;
    if (current < target) {
      el.textContent = Math.floor(current) + "+";
      requestAnimationFrame(update);
    } else {
      el.textContent = target + "+";
    }
  };
  update();
}
