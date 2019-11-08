/* Global variables */
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


/* Create header elements */
function createHeader() {
    const header = document.getElementById('header');

    /* create a title, 2 paragraphs and add to header */

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


/* Create 4 sections about smartwatchs */
function createSections() {

    /* array of objects to save the data of each smartwatch */
    const doc = [
        {
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt.',
            image: './images/apple.png'
        },
        {
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt.',
            image: './images/ticwatch.png'
        },
        {
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt.',
            image: './images/xiaomi.png'
        },
        {
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt.',
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
        
        const info = document.createElement('p');
        info.textContent = watchInfo.info;
        
        article.appendChild(title)    
        article.appendChild(info)
        
        /* add div and  article to section */
        section.appendChild(div);
        section.appendChild(article);
    });
};

createSections();



/* scroll to top when button (id = btn-scroll-top) is clicked */
document.getElementById("btn-scroll-top").addEventListener('click', function() {
    window.scrollTo(0, 0);
})

  
/* Show or hide button (id = btn-scroll-top) */
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


/* 
https://stackoverflow.com/questions/1350581/how-to-get-an-elements-top-position-relative-to-the-browsers-viewport?noredirect=1&lq=1

const activateMenuForMostVisibleSection = () => {
    const indexOfMinBounding = getIndexOfMinPositiveBounding([...navItems]);
  
    // knowing index of minimum positive bounding value we are able to decide which menu item to activate
    [...navItems].map((menu, index) => {
      if (index === indexOfMinBounding) {
        menu.classList.add("active");
      } else {
        menu.classList.remove("active");
      }
    })
  };
  
const getIndexOfMinPositiveBounding = (sectionsArray) => {
    // create a "bounding values" array representing top bounding values for all our sections
    const boundingArray = sectionsArray.map( section => {
      return section.getBoundingClientRect().top;
    });
  
    // find the minimum positive bounding value
    const minBounding = boundingArray.reduce((acc, item) => item < acc && item > 0 ? item : acc, Number.MAX_SAFE_INTEGER);
  
    // return index of minimum positive bounding to know which menu item we should make active
    return boundingArray.findIndex(item => item === minBounding);
};


// 
var rect = elem.getBoundingClientRect();
var win = elem.ownerDocument.defaultView;

return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
};


//teste
const activateMenuForMostVisibleSection = () => {
    
    const navItems = document.querySelectorAll("a.links");

    navItems.forEach(element => {
        var rect = element.getBoundingClientRect();
        var win = element.ownerDocument.defaultView;

        console.log(rect.top + '     ' + win.pageYOffset)
    });
};


document.addEventListener("scroll", activateMenuForMostVisibleSection)

*/