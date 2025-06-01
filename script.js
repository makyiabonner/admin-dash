const PROJECT = document.querySelector(".card-wrapper");

let object = {
  title: "Super Cool Project",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque alias aliquam doloribus obcaecati non nulla, nisi molestias quo nam veniam iste distinctio similique iusto odio deleniti! Ullam, iure accusamus!",
};

const CARD_BUTTON_LOGOS = [
  "images/star-plus-outline.png",
  "images/eye-plus-outline.png",
  "images/share-variant.png",
];
const PROJECT_STORAGE = [
  {
    title: "Super Cool Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque alias aliquam doloribus obcaecati non nulla, nisi molestias quo nam veniam iste distinctio similique iusto odio deleniti! Ullam, iure accusamus!",
  },
  {
    title: "Super Cool Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque alias aliquam doloribus obcaecati non nulla, nisi molestias quo nam veniam iste distinctio similique iusto odio deleniti! Ullam, iure accusamus!",
  },
  {
    title: "Super Cool Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque alias aliquam doloribus obcaecati non nulla, nisi molestias quo nam veniam iste distinctio similique iusto odio deleniti! Ullam, iure accusamus!",
  },
  {
    title: "Super Cool Project",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Super Cool Project",
    description:
      "Lorem ipsum neque alias aliquam doloribus obcaecati non nulla, nisi molestias quo nam veniam iste distinctio similique iusto odio deleniti! Ullam, iure accusamus!",
  },
  {
    title: "Super Cool Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque alias aliquam doloribus obcaecati non nulla, nisi molestias quo nam veniam iste distinctio similique iusto odio deleniti! Ullam, iure accusamus!",
  },
  {
    title: "Super Cool Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque alias aliquam doloribus obcaecati non nulla, nisi molestias quo nam veniam iste distinctio similique iusto odio deleniti! Ullam, iure accusamus!",
  },
  {
    title: "Super Cool Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque alias aliquam doloribus obcaecati non nulla, nisi molestias quo nam veniam iste distinctio similique iusto odio deleniti! Ullam, iure accusamus!",
  },
  {
    title: "Super Cool Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque alias aliquam doloribus obcaecati non nulla, nisi molestias quo nam veniam iste distinctio similique iusto odio deleniti! Ullam, iure accusamus!",
  },
  {
    title: "Super Cool Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque alias aliquam doloribus obcaecati non nulla, nisi molestias quo nam veniam iste distinctio similique iusto odio deleniti! Ullam, iure accusamus!",
  },
  {
    title: "Super Cool Project",
    description:
      "Neque alias aliquam doloribus obcaecati non nulla, nisi molestias quo nam veniam iste distinctio similique iusto odio deleniti! Ullam, iure accusamus!",
  },
];

for (const obj of PROJECT_STORAGE) {
  const CARD_DIV = document.createElement("div");
  const CARD_HEADER = document.createElement("h4");
  const CARD_DESCRIPTION = document.createElement("p");
  const SHARE_DIV = document.createElement("div");
  for (const logo of CARD_BUTTON_LOGOS) {
    const BUTTON = document.createElement("button");
    const BUTTON_LOGO = document.createElement("img");

    BUTTON.classList.add("card-button");

    BUTTON_LOGO.src = logo;
    BUTTON.appendChild(BUTTON_LOGO);
    SHARE_DIV.appendChild(BUTTON);
  }

  CARD_HEADER.textContent = obj.title;
  CARD_DESCRIPTION.textContent = obj.description;

  CARD_DIV.classList.add("card");
  SHARE_DIV.classList.add("share-wrapper");

  CARD_DIV.appendChild(CARD_HEADER);
  CARD_DIV.appendChild(CARD_DESCRIPTION);
  CARD_DIV.appendChild(SHARE_DIV);
  PROJECT.appendChild(CARD_DIV);
}
