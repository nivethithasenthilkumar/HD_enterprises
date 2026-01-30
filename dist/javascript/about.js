function showPage(index) {
  const pages = document.querySelectorAll(".about-page");
  const buttons = document.querySelectorAll(".page-btn");

  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
    buttons[i].classList.toggle("active", i === index);
  });
}
