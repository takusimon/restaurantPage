import wagyu from "../imgs/wagyu.jpeg";
import lobster from "../imgs/lobster.jpeg";
import eclipse from "../imgs/eclips.jpeg";

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

    const dessert = document.createElement("h2");
    dessert.classList.add("dessert");
    dessert.textContent = "Dessert";

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

    const lobsterDescription = `Butter-poached lobster tail, saffron beurre blanc, caviar, and delicate edible flowers.`;

    const eclipseDescription = `A ruby-red chocolate sphere filled with raspberry mousse, dark chocolate ganache, and edible gold leaf.`;

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
        makeMenuItem (
            240,
            "Celestial Lobster",
            lobster,
            "Celestial Lobster",
            lobsterDescription         
        ),
        dessert,
        makeMenuItem (
            95,
            "Crimson Eclipse",
            eclipse,
            "Crimson Eclipse",
            eclipseDescription
        )

    )
}