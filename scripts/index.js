import { header } from './header.js';
import { nav } from './nav.js';
import { main } from './main.js';
import { techniques } from './techniques.js';
import { footer } from './footer.js';

const model = [
  { type: "header", value: "./images/logo.png" },
  { type: "nav"},
  { type: "main", value: "./images/rotation.png"},
  { type: "techniques"},
  { type: "footer"}
];

const $page = document.querySelector(".page");

model.forEach((block) => {
  let html = "";

  if (block.type === "header") {
    html = header(block);
  } else if (block.type === "nav") {
    html = nav(block);
  } else if (block.type === "main") {
    html = main(block);
  } else if (block.type === "techniques") {
    html = techniques(block);
  } else if (block.type === "footer") {
    html = footer(block);
  }

  $page.insertAdjacentHTML("beforeend", html);
});

const $menu = document.querySelector(".menu");
const $nav = document.querySelector(".nav");

$menu.addEventListener("click", () => {
  $menu.classList.toggle("active");
  $nav.classList.toggle('open');
});
