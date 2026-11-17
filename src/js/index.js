import { homePage } from "./home.js";
import "../css/reset.css";
import "../css/style.css";

const contentDiv = document.querySelector("#content");
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

homeBtn.addEventListener('click',()=>{
    contentDiv.textContent = '';
    homePage();
});

menuBtn.addEventListener('click',()=>{
    contentDiv.textContent = '';
});

aboutBtn.addEventListener('click',()=>{
    contentDiv.textContent = '';
});

homePage();
