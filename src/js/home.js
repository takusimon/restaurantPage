import michelinStars from "../imgs/MichelinStar.svg";

export function homePage(){
    const contentDiv = document.querySelector("#content");
    // Heading Section
    const headingContainer = document.createElement("div");
    headingContainer.setAttribute("id","heading-container");
    const heading = document.createElement("h1");
    heading.textContent = "The Best Restaurant In the World!";
    headingContainer.appendChild(heading);

    // Image Section
    function makeStar (){
        const star = document.createElement("img")
        star.src = michelinStars;
        star.width = 100;

        return star;
    }

    const starMainContainer = document.createElement("div");
    const starSubContainer = document.createElement("div");
    const firstStar = makeStar();
    const secondStar = makeStar();
    const thirdStar = makeStar();
    const earningYear = document.createElement("p");
    earningYear.textContent = "Since 2077";

    starSubContainer.append(firstStar,secondStar,thirdStar);
    starMainContainer.append(starSubContainer,earningYear);

    contentDiv.append( headingContainer,starMainContainer);
 }