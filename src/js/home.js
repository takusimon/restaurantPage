export function homePage(){
    const headingContainer = document.createElement("div");
    headingContainer.setAttribute("id","heading-container");

    const heading = document.createElement("h1");
    heading.textContent = "The Best Restaurant In the World!";

    headingContainer.appendChild(heading);

    return {headingContainer};
}