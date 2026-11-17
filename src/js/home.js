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
        star.alt = "Michelin Star"
        star.classList.add("star");
        return star;
    }

    const starMainContainer = document.createElement("div");
    starMainContainer.setAttribute("id","star-main-container");

    const starSubContainer = document.createElement("div");
    starSubContainer.setAttribute("id","star-sub-container");

   
    const earningYear = document.createElement("p");
    earningYear.textContent = "2077";

    starSubContainer.append(makeStar(),makeStar(),makeStar());
    starMainContainer.append(starSubContainer,earningYear);

    // Message Section
    const messageContainer = document.createElement("div");
    const message = document.createElement("p");

    message.textContent = `Since 2066 we've been working tirelessly
    to deliver to you nothing but the best food in the word.
    11 years later our efforts have finally been recognized.
    We Are The BEST Restaurant In The world!!`;

    message.classList.add("achievement-message")
    
    const messageAuthor = document.createElement("p");
    messageAuthor.classList.add("message-author");
    messageAuthor.textContent = "- Best Chief In the World!";

    messageContainer.append(message,messageAuthor);

    //Hours Section
    function makeHours(day,hours){
        const hoursOpen = document.createElement("p");
        hoursOpen.classList.add("hours");
        hoursOpen.textContent = `${day}: 6pm - ${6 + hours}pm`;
        return hoursOpen;
    }

    const hoursMainContainer = document.createElement("div");
    hoursMainContainer.setAttribute("id","hours-main-container");
    const hoursSubContainer = document.createElement("div");
    hoursSubContainer.setAttribute("id","hours-sub-container");
    const hoursHeading = document.createElement("p");
    hoursHeading.classList.add("heading");
    hoursHeading.textContent = "Hours";

    hoursSubContainer.append(
        makeHours("Mon",4),
        makeHours("Tues",4),
        makeHours("Wed",5),
        makeHours("Thurs",4),
        makeHours("Fri",5),
        makeHours("Sat",5),
        makeHours("Sun",2),
    )

    hoursMainContainer.append(hoursHeading,hoursSubContainer);
    //Location Section
    const locationContainer = document.createElement("div");
    locationContainer.setAttribute("id","location-container");

    const locationHeading = document.createElement("p");
    locationHeading.classList.add("heading");
    locationHeading.textContent = "Location";

    const location = document.createElement("p");
    location.textContent = "1231, Restaurant Way, Night City";

    locationContainer.append(locationHeading, location);

    contentDiv.append( 
        headingContainer,
        starMainContainer,
        messageContainer,
        hoursMainContainer,
        locationContainer);
 }