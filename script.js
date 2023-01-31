"use strict";

const btnOpenMenu = document.querySelector(".openModal");
const btnCloseMenu = document.querySelector(".closeModal");
const modalMenu = document.querySelector(".menuContainer");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");

btnOpenMenu.addEventListener("click", function () {
  modalMenu.classList.remove("hidden");
  modalMenu.classList.add("overlay");
  btnCloseMenu.classList.remove("hidden");
  btnOpenMenu.classList.add("hidden");
  body.classList.add("blurry-text");
});

btnCloseMenu.addEventListener("click", function () {
  modalMenu.classList.add("hidden");
  modalMenu.classList.remove("overlay");
  btnCloseMenu.classList.add("hidden");
  btnOpenMenu.classList.remove("hidden");
  body.classList.remove("blurry-text");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    modalMenu.classList.add("hidden");
    modalMenu.classList.remove("overlay");
    btnCloseMenu.classList.add("hidden");
    btnOpenMenu.classList.remove("hidden");
    body.classList.remove("blurry-text");
  });
}
