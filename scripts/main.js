import { onGetProducts } from "./firestore.js";

const d = document,
  $ulProducts = d.querySelector(".cards");

window.addEventListener("DOMContentLoaded", () => {
  onGetProducts((dbProducts) => {
    let html = "";

    dbProducts.forEach((doc) => {
      const product = doc.data();

      if (product.stock === true) {
        html += `
              <li class="card">
                <img src=${product.img} alt=${product.name}>
                <p>${product.name}</p>
                <h5>$${product.price}</h5>
              </li>
      `;
      } else {
        html += `
              <li class="card no-stock">
                <img src=${product.img} alt=${product.name}>
                <p>${product.name}</p>
                <h5>$${product.price}</h5>
                <p>SIN STOCK</p>
              </li>
      `;
      }
    });

    $ulProducts.innerHTML = html;
  });
});

d.addEventListener("click", (e) => {
  if (matchMedia("(max-width: 1023px)").matches) {
    if (
      e.target.matches(".header-article a") ||
      e.target.matches(".header-article a *")
    ) {
      d.querySelector(".navbar").classList.add("is-active");
    }

    if (e.target.matches(".navbar a") || e.target.matches(".navbar a *")) {
      d.querySelector(".navbar").classList.remove("is-active");
    }
  }
});
