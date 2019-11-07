/* global variables */
const navBar = document.getElementById("items-nav");

/* Function to create navbar items */
function createNavItems() {
    const items = document.querySelectorAll("section");

    for (const item of items) {
        const li = document.createElement("li");
        const itemId = item.getAttribute("id");
        const itemData = item.getAttribute("data-nav");

        li.innerHTML = `<a href="#${itemId}" class="links">${itemData}</a> | `;

        navBar.appendChild(li);
    }
};

createNavItems();


/* Function to create header elements */
function createHeader() {
    const header = document.getElementById('header');

    /* create a title and a paragraph and add to header */

    const title = document.createElement('h1');
    title.textContent = 'What is a smartWatch?';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue.';

    header.appendChild(title)
    header.appendChild(paragraph)

    /* style header */
    header.setAttribute('style', 'grid-area: 1/1/2/3; display: flex; flex-direction: column; justify-content: center; text-align: center; padding: 0 50px');

};

createHeader();


/* scroll to top when button (id = btn-scroll-top) is clicked */
document.getElementById("btn-scroll-top").addEventListener('click', function() {
    window.scrollTo(0, 0);
})

  
/* Show or hide button (id = btn-scroll-top) */
const showHideButton = () => {
    const btn = document.getElementById("btn-scroll-top");
    let showButton = window.scrollY > window.innerHeight / 3;

    if (showButton === true) {
        btn.style.visibility = "visible";
    } else {
        btn.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", showHideButton);

