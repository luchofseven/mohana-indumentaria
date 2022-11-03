const d = document;

d.addEventListener("click", (e) => {
  if (
    e.target.matches(".header-article a") ||
    e.target.matches(".header-article a *")
  ) {
    d.querySelector(".navbar").classList.add("is-active");
    d.querySelector(".header-article").style.display = "none";
  }

  if (e.target.matches(".navbar a") || e.target.matches(".navbar a *")) {
    d.querySelector(".navbar").classList.remove("is-active");
    d.querySelector(".header-article").style.display = "flex";
  }
});
