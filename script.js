"use strict";

const btnOpenMenu = document.querySelector(".openModal");
const btnCloseMenu = document.querySelector(".closeModal");
const modalMenu = document.querySelector(".menuContainer");
const logo = document.querySelector(".logo");

btnOpenMenu.addEventListener("click", function () {
  console.log("clicked");
  modalMenu.classList.remove("hidden");
  modalMenu.classList.add("overlay");
  btnCloseMenu.classList.remove("hidden");
  btnOpenMenu.classList.add("hidden");
  logo.classList.add("hidden");
});

btnCloseMenu.addEventListener("click", function () {
  console.log("Close btn clicked");
  modalMenu.classList.add("hidden");
  modalMenu.classList.remove("overlay");
  btnCloseMenu.classList.add("hidden");
  btnOpenMenu.classList.remove("hidden");
  logo.classList.remove("hidden");
});
