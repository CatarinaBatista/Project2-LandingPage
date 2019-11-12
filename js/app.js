/* Global variables */
const navBar = document.getElementById("items-nav");
const header = document.getElementById('header');


/* --- Function to create navbar items --- */
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


/* --- Create header elements --- */
function createHeader() {

    /* create a title, 2 paragraphs and add they to header */

    const title = document.createElement('h1');
    title.textContent = 'What is a smartwatch?';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'A smartwatch is a wearable computing device marketed as more than a cell phone. ' +
        'It is more than a simple watch, they use touchscreens, offer apps, and often record your heart rate and other vital signs.';
    
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'A smartwatch is also known as a smart wristwatch.';

    header.appendChild(title);
    header.appendChild(paragraph);
    header.appendChild(paragraph2);

    /* style header */
    header.setAttribute(
        'style', 
        'display: flex; flex-direction: column; justify-content: center; text-align: center;'
    );

};

createHeader();


/* --- Create 4 sections about smartwatchs --- */
function createSections() {

    /* array of objects to save the data of each smartwatch */
    const doc = [
        {
            info: 'Best Smartwatch on the market <br/><br/> Positive points: Better battery than last generation, Multiple apps, Many sensors, ' +
            'Good quality OLED screen, 4G connection, Good fitness features <br/><br/> Negative points: Absurdly expensive, Compatible with iPhone only',
            image: './images/apple.png'
        },
        {
            info: 'Best Smartwatch with Wear OS <br/><br/> Positive points: Affordable price, Good battery life, Waterproof, Responds well to commands, ' + 
            'Beautiful and flashy design <br/><br/> Negative points: NFC not included, Basic training information only',
            image: './images/ticwatch.png'
        },
        {
            info: 'Best Casual Smartwatch <br/><br/> Positive points: Good battery life, Circular design, Durable and durable smartwatch, Waterproof' +
            '<br/><br/> Negative points: Applications must be installed at your own risk, Operating system could be more complete',
            image: './images/xiaomi.png'
        },
        {
            info: 'Best Sports Smartwatch <br/><br/> Positive points: Great battery life, Good processor, Tizen OS, Very beautiful' +
            '<br/><br/> Negative points: Without Google Maps, Whatsapp or Facebook, Proprietary Wireless Charger',
            image: './images/samsung.png'
        }
    ];
    
    /* save all navBar links */
    const navItems = document.querySelectorAll("a.links");

    /* Go through navItems */
    navItems.forEach((item, index) => {        
        const section = document.querySelector(item.getAttribute('href'));
        const watchInfo = doc[index];

        /* create a div (to be styled) and add an image  */
        const div = document.createElement('div');

        const img = document.createElement('img');
        img.src = watchInfo.image;
        img.alt = section.getAttribute('data-nav');

        div.appendChild(img)

        /* create an article and add a title and a paragraph */
        const article = document.createElement('article');

        const title = document.createElement('h2');
        title.textContent = section.getAttribute('data-nav');
        
        const info = document.createElement('div');
        info.innerHTML = watchInfo.info;
        
        article.appendChild(title)    
        article.appendChild(info)

        
        /* add div and article to section */
        section.appendChild(div);
        section.appendChild(article);
    });
};

createSections();


/* --- scroll to top when button (id = btn-scroll-top) is clicked --- */
document.getElementById("btn-scroll-top").addEventListener('click', function() {
    window.scrollTo(0, 0);
})

  
/* --- Show or hide button (id = btn-scroll-top) --- */
const showHideButton = () => {
    const btn = document.getElementById("btn-scroll-top");
    const showButton = window.scrollY > window.innerHeight / 3;

    if (showButton === true) {
        btn.style.visibility = "visible";
    } else {
        btn.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", showHideButton);


/* --- Get the section that is in the viewport --- */
function showActiveSection() {
    const sections = document.querySelectorAll("section[data-nav]");
    const navItems = document.querySelectorAll("a.links");

    [...sections].map((section) => {
        [...navItems].map((item) => {
            if (item.hash === ('#' + section.id)) {
                if (isInViewport(section)) {
                    item.classList.add("active");
                    //console.log('adiciona')
                } else {
                    item.classList.remove("active");
                    //console.log('remove')
                }
            }
        })
    })
}

/* verify if section is in viewport */
function isInViewport(section) {
    const bounding = section.getBoundingClientRect();
    const headerHeidght = header.getBoundingClientRect().height;
    
    return (
        ((bounding.top + headerHeidght) <= (document.documentElement.clientHeight, window.innerHeight /*window.pageYOffset*/ || 0) &&
        (bounding.top + headerHeidght) + bounding.height >= 0) /*&&
        (bounding.left <= (document.documentElement.clientWidth, window.innerWidth /*window.pageXOffset || 0) &&
        bounding.left + bounding.height > 0)*/
    );
};

document.addEventListener("scroll", showActiveSection)