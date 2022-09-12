import { gallery } from './fetch.js'
import {paginationBtns } from './fetch.js'

const spinner = document.querySelector(".input-notification");

export function spinnerHidden() {
spinner.style.visibility = 'hidden';
spinner.style.display = 'none';
paginationBtns.style.visibility = "visible";
paginationBtns.style.display = "flex";
}

export function spinnerVisible() {
spinner.style.visibility = 'visible';
spinner.style.display = 'block';
paginationBtns.style.visibility = "hidden";
gallery.innerHTML = '';
}