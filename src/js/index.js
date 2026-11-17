import { homePage } from "./home.js";

const homePageContent = homePage();
const contentDiv = document.querySelector("#content");

contentDiv.append(homePageContent.headingContainer);