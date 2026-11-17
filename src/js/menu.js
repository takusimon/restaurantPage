import wagyu from "../imgs/wagyu.jpeg";

export function menuPage() {
    const contentDiv = document.querySelector("#content");
    // Heading Section
    const headingContainer = document.createElement("div");
    headingContainer.setAttribute("id","heading-container");
    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    heading.classList.add("menu");
    headingContainer.appendChild(heading);

    // Subheading Section
    const entree = document.createElement("h2");
    entree.classList.add("entree");
    entree.textContent = "Entrées"

    function makeMenuItem (price,item,picture,alt,description){
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item");
        const itemHeading = document.createElement("p");
        itemHeading.classList.add("heading");
        itemHeading.textContent = item;
        const itemDescription = document.createElement("p");
        itemDescription.classList.add("item-description");
        itemDescription.textContent = description;
        const itemPrice = document.createElement('p');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = "$"+ price;
        const itemImage = document.createElement("img");
        itemImage.src = picture;
        itemImage.alt = alt;
        itemImage.width = 360;


        itemContainer.append(
            itemHeading,
            itemDescription,
            itemPrice,
            itemImage,
        );

        return itemContainer;
    }

    const wagyuDescription = `Japanese A5 Wagyu, black truffle, pomme purée, and a rich red-wine reduction.`;
    contentDiv.append(
        headingContainer,
        entree,
        makeMenuItem (
            285,
            "Imperial Wagyu",
            wagyu,
            "Imperial Wagyu",
            wagyuDescription
        ),
    )
}