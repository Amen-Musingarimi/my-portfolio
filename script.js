const btnOpenMenu = document.querySelector('.openModal');
const btnCloseMenu = document.querySelector('.closeModal');
const modalMenu = document.querySelector('.menuContainer');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

// Opening mobile menu
const openMenu = function openModal() {
  modalMenu.classList.remove('hidden');
  modalMenu.classList.add('mobileOverlay');
  btnCloseMenu.classList.remove('hidden');
  btnOpenMenu.classList.add('hidden');
  body.classList.add('blurry-text');
};

btnOpenMenu.addEventListener('click', openMenu);

// Close menu button
const closeMenuBtn = function closeMenu() {
  modalMenu.classList.add('hidden');
  modalMenu.classList.remove('mobileOverlay');
  btnCloseMenu.classList.add('hidden');
  btnOpenMenu.classList.remove('hidden');
  body.classList.remove('blurry-text');
};
btnCloseMenu.addEventListener('click', closeMenuBtn);

// Close menu after clicking menu option
const closeOnClick = function close() {
  modalMenu.classList.add('hidden');
  modalMenu.classList.remove('mobileOverlay');
  btnCloseMenu.classList.add('hidden');
  btnOpenMenu.classList.remove('hidden');
  body.classList.remove('blurry-text');
};

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', closeOnClick);
}

// -----------------------------Popup window------------------------------------------------
const descriptionText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";

const portfolioArray = [
  {
    projectName: 'Tonic',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    portfolioImageDesktop: 'images/desktop-work11.png',
    description: descriptionText,
    htmlSkill: 'html',
    cssSkill: 'css',
    javascriptSkill: 'javascript',
    buttons: [],
  },

  {
    projectName: 'Multi-Post Stories',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: 2015,
    portfolioImageDesktop: 'images/desktop-work2.png',
    description: descriptionText,
    htmlSkill: 'html',
    cssSkill: 'css',
    javascriptSkill: 'javascript',
    buttons: [],
  },

  {
    projectName: 'Facebook 360',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: 2015,
    portfolioImageDesktop: 'images/desktop-work3.png',
    description: descriptionText,
    htmlSkill: 'html',
    cssSkill: 'css',
    javascriptSkill: 'javascript',
    buttons: [],
  },

  {
    projectName: 'Uber Navigation',
    company: 'Uber',
    role: 'Lead Developer',
    year: 2018,
    portfolioImageDesktop: 'images/desktop-work4.png',
    description: descriptionText,
    htmlSkill: 'html',
    cssSkill: 'css',
    javascriptSkill: 'javascript',
    buttons: [],
  },
];

// ------------------------------Dynamic Work buld------------------------------
const work1 = document.querySelector('.grid-item-1');
work1.innerHTML = `
<div class="card-container">
            <img
              src="images/desktop-work1.png"
              alt="My firts portfolio work"
              class="works-image"
            />
            <div class="works-details">
              <h2 class="work-title">Tonic</h2>
              <ul>
                <li><h3 class="work-client h3-common-styles">CANOPY</h3></li>
                <li><img src="images/dot.png" alt="Canopy icon image" /></li>
                <li>
                  <h3 class="work-role h3-common-styles">Back End Dev</h3>
                </li>
                <li><img src="images/dot.png" alt="Backend icon image" /></li>
                <li><h3 class="work-year h3-common-styles">2015</h3></li>
              </ul>
              <p class="work-description">
                A daily selection of privately personalized reads; no accounts
                or sign-ups required.
              </p>
              <ul class="works-btns">
                <li><button type="button" class="works-btn">html</button></li>
                <li><button type="button" class="works-btn">css</button></li>
                <li>
                  <button type="button" class="works-btn">javascript</button>
                </li>
              </ul>
              <button class="see-project-btn seeWork1Btn" type="button">
                See Project
              </button>
            </div>
          </div>
`;

// work 2-----
const work2 = document.querySelector('.grid-item2');
work2.innerHTML = `
<div class="card-container">
            <img
              src="images/desktop-work2.png"
              alt="My firts portfolio work"
              class="works-image reorder-img"
            />
            <div class="works-details">
              <h2 class="work-title">
                Multi-Post <br class="line-break" />Stories
              </h2>
              <ul>
                <li><h3 class="work-client h3-common-styles">FACEBOOK</h3></li>
                <li><img src="images/dot.png" alt="Facebook icon image" /></li>
                <li>
                  <h3 class="work-role h3-common-styles">Full Stack Dev</h3>
                </li>
                <li>
                  <img src="images/dot.png" alt="Full-Stack icon image" />
                </li>
                <li><h3 class="work-year h3-common-styles">2015</h3></li>
              </ul>
              <p class="work-description">
                A daily selection of privately personalized reads; no accounts
                or sign-ups required.
              </p>
              <ul class="works-btns">
                <li><button type="button" class="works-btn">html</button></li>
                <li><button type="button" class="works-btn">css</button></li>
                <li>
                  <button type="button" class="works-btn">javascript</button>
                </li>
              </ul>
              <button class="see-project-btn seeWork2Btn" type="button">
                See Project
              </button>
            </div>
          </div>
`;

// Work 3
const work3 = document.querySelector('.grid-item3');
work3.innerHTML = `
<div class="card-container">
            <img
              src="images/desktop-work3.png"
              alt="My firts portfolio work"
              class="works-image"
            />
            <div class="works-details">
              <h2 class="work-title">Facebook 360</h2>
              <ul>
                <li><h3 class="work-client h3-common-styles">FACEBOOK</h3></li>
                <li>
                  <img src="images/dot.png" alt="Facebook 360 icon image" />
                </li>
                <li>
                  <h3 class="work-role h3-common-styles">Full Stack Dev</h3>
                </li>
                <li>
                  <img src="images/dot.png" alt="Full Stack icon image" />
                </li>
                <li><h3 class="work-year h3-common-styles">2015</h3></li>
              </ul>
              <p class="work-description">
                A daily selection of privately personalized reads; no accounts
                or sign-ups required.
              </p>
              <ul class="works-btns">
                <li><button type="button" class="works-btn">html</button></li>
                <li><button type="button" class="works-btn">css</button></li>
                <li>
                  <button type="button" class="works-btn">javascript</button>
                </li>
              </ul>
              <button class="see-project-btn seeWork3Btn" type="button">
                See Project
              </button>
            </div>
          </div>
`;

// Work4--
const work4 = document.querySelector('.grid-item4');
work4.innerHTML = `
<div class="card-container">
            <img
              src="images/desktop-work4.png"
              alt="My firts portfolio work"
              class="works-image reorder-img"
            />
            <div class="works-details">
              <h2 class="work-title">Uber Navigation</h2>
              <ul>
                <li><h3 class="work-client h3-common-styles">UBER</h3></li>
                <li><img src="images/dot.png" alt="Uber icon image" /></li>
                <li>
                  <h3 class="work-role h3-common-styles">Lead Developer</h3>
                </li>
                <li><img src="images/dot.png" alt="Leed Dev icon image" /></li>
                <li><h3 class="work-year h3-common-styles">2018</h3></li>
              </ul>
              <p class="work-description">
                A daily selection of privately personalized reads; no accounts
                or sign-ups required.
              </p>
              <ul class="works-btns">
                <li><button type="button" class="works-btn">html</button></li>
                <li><button type="button" class="works-btn">css</button></li>
                <li>
                  <button type="button" class="works-btn">javascript</button>
                </li>
              </ul>
              <button class="see-project-btn seeWork4Btn" type="button">
                See Project
              </button>
            </div>
            <section class="popupWindow hide"></section>
          </div>
`;

const popupWindow = document.querySelector('.popupWindow');
const popupContainer = document.createElement('div');
popupContainer.classList.add('pop');
popupWindow.appendChild(popupContainer);
popupContainer.innerHTML = `
<div class="popupCard">
<div class="projectHeader">
  <h2 class="workTitle"></h2>
  <a class="closeBtn" href="#"><i class="fa-solid fa-xmark"></i></a>
</div>
<div class="roleDetail marginBottom">
  <h3 class="clientName"></h3>
  <img src="images/dot.png" alt="Canopy icon image" />
  <h3 class="roleOccupied"></h3>
  <img src="images/dot.png" alt="Backend icon image" />
  <h3 class="projectYear"></h3>
</div>
<img
src=""
alt="My firts portfolio work"
class="workImageDesktop"
/>
<div class="projectDetails details">
  <p class="projectDescription marginBottom"></p>
  <div projectBtns>
    <div  class="skillsBtns marginBottom paddingBottom">
      <button class="htmlBtn" type="button"></button>
      <button class="cssBtn" type="button"></button>
      <button class="javascriptBtn" type="button"></button>
    </div>
    <div class="buttons previewBtns">
      <button class="see-project-btn dynamicBTns" type="button">   See Live
      <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
      <button class="see-project-btn dynamicBTns" type="button"> See Source
      <i class="fa-brands fa-github"></i></button>
    </div>
  </div>
</div>
</div>
`;

function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const workTitle = document.querySelector('.workTitle');
const clientName = document.querySelector('.clientName');
const roleOccupied = document.querySelector('.roleOccupied');
const projectYear = document.querySelector('.projectYear');
const workImageDesktop = document.querySelector('.workImageDesktop');
const projectDescription = document.querySelector('.projectDescription');
const htmlBtn = document.querySelector('.htmlBtn');
const cssBtn = document.querySelector('.cssBtn');
const javascriptBtn = document.querySelector('.javascriptBtn');
const closeBtn = document.querySelector('.closeBtn');

// ---------------------------Work 1 ----------------------------------------
const seeWork1Btn = document.querySelector('.seeWork1Btn');
seeWork1Btn.addEventListener('click', () => {
  scrollUp();
  popupWindow.classList.remove('hide');
  popupWindow.classList.add('overlay', 'heightAdjust');
  workTitle.innerHTML = portfolioArray[0].projectName;
  workTitle.classList.add('work-title');
  clientName.innerHTML = portfolioArray[0].company;
  clientName.classList.add('work-client', 'h3-common-styles');
  roleOccupied.innerHTML = portfolioArray[0].role;
  roleOccupied.classList.add('work-role', 'h3-common-styles');
  projectYear.innerHTML = portfolioArray[0].year;
  projectYear.classList.add('work-year', 'h3-common-styles');
  workImageDesktop.setAttribute('src', portfolioArray[0].portfolioImageDesktop);
  workImageDesktop.classList.add('works-image', 'desktop-work-img');
  projectDescription.innerHTML = portfolioArray[0].description;
  projectDescription.classList.add('work-description');
  htmlBtn.innerHTML = portfolioArray[0].htmlSkill;
  htmlBtn.classList.add('works-btn');
  cssBtn.innerHTML = portfolioArray[0].cssSkill;
  cssBtn.classList.add('works-btn');
  javascriptBtn.innerHTML = portfolioArray[0].javascriptSkill;
  javascriptBtn.classList.add('works-btn');
});

// ---------------------------Work 2 ----------------------------------------
const seeWork2Btn = document.querySelector('.seeWork2Btn');
seeWork2Btn.addEventListener('click', () => {
  scrollUp();
  popupWindow.classList.remove('hide', 'heightAdjust');
  popupWindow.classList.add('overlay');
  workTitle.innerHTML = portfolioArray[1].projectName;
  workTitle.classList.add('work-title');
  clientName.innerHTML = portfolioArray[1].company;
  clientName.classList.add('work-client', 'h3-common-styles');
  roleOccupied.innerHTML = portfolioArray[1].role;
  roleOccupied.classList.add('work-role', 'h3-common-styles');
  projectYear.innerHTML = portfolioArray[1].year;
  projectYear.classList.add('work-year', 'h3-common-styles');
  workImageDesktop.setAttribute('src', portfolioArray[1].portfolioImageDesktop);
  workImageDesktop.classList.add('works-image', 'desktop-work-img');
  projectDescription.innerHTML = portfolioArray[1].description;
  projectDescription.classList.add('work-description');
  htmlBtn.innerHTML = portfolioArray[1].htmlSkill;
  htmlBtn.classList.add('works-btn');
  cssBtn.innerHTML = portfolioArray[1].cssSkill;
  cssBtn.classList.add('works-btn');
  javascriptBtn.innerHTML = portfolioArray[1].javascriptSkill;
  javascriptBtn.classList.add('works-btn');
});

// ---------------------------Work 3 ----------------------------------------
const seeWork3Btn = document.querySelector('.seeWork3Btn');
seeWork3Btn.addEventListener('click', () => {
  scrollUp();
  popupWindow.classList.remove('hide');
  popupWindow.classList.add('overlay');
  workTitle.innerHTML = portfolioArray[2].projectName;
  workTitle.classList.add('work-title');
  clientName.innerHTML = portfolioArray[2].company;
  clientName.classList.add('work-client', 'h3-common-styles');
  roleOccupied.innerHTML = portfolioArray[2].role;
  roleOccupied.classList.add('work-role', 'h3-common-styles');
  projectYear.innerHTML = portfolioArray[2].year;
  projectYear.classList.add('work-year', 'h3-common-styles');
  workImageDesktop.setAttribute('src', portfolioArray[2].portfolioImageDesktop);
  workImageDesktop.classList.add('works-image', 'desktop-work-img');
  projectDescription.innerHTML = portfolioArray[2].description;
  projectDescription.classList.add('work-description');
  htmlBtn.innerHTML = portfolioArray[2].htmlSkill;
  htmlBtn.classList.add('works-btn');
  cssBtn.innerHTML = portfolioArray[2].cssSkill;
  cssBtn.classList.add('works-btn');
  javascriptBtn.innerHTML = portfolioArray[2].javascriptSkill;
  javascriptBtn.classList.add('works-btn');
});

// ---------------------------Work 4 ----------------------------------------
const seeWork4Btn = document.querySelector('.seeWork4Btn');
seeWork4Btn.addEventListener('click', () => {
  scrollUp();
  popupWindow.classList.remove('hide');
  popupWindow.classList.add('overlay');
  workTitle.innerHTML = portfolioArray[3].projectName;
  workTitle.classList.add('work-title');
  clientName.innerHTML = portfolioArray[3].company;
  clientName.classList.add('work-client', 'h3-common-styles');
  roleOccupied.innerHTML = portfolioArray[3].role;
  roleOccupied.classList.add('work-role', 'h3-common-styles');
  projectYear.innerHTML = portfolioArray[3].year;
  projectYear.classList.add('work-year', 'h3-common-styles');
  workImageDesktop.setAttribute('src', portfolioArray[3].portfolioImageDesktop);
  workImageDesktop.classList.add('works-image', 'desktop-work-img');
  projectDescription.innerHTML = portfolioArray[3].description;
  projectDescription.classList.add('work-description');
  htmlBtn.innerHTML = portfolioArray[3].htmlSkill;
  htmlBtn.classList.add('works-btn');
  cssBtn.innerHTML = portfolioArray[3].cssSkill;
  cssBtn.classList.add('works-btn');
  javascriptBtn.innerHTML = portfolioArray[3].javascriptSkill;
  javascriptBtn.classList.add('works-btn');
});

// -----------------------------------------close popup--------------------
closeBtn.addEventListener('click', () => {
  popupWindow.classList.add('hide');
  popupWindow.classList.remove('overlay');
});

// Contact Form Validation-------------------------------------------------------------
const email = document.querySelector('.email');

function validateForm(e) {
  if (email.value !== email.value.toLowerCase()) {
    document.querySelector('.errorMessage').classList.remove('hide');
    e.preventDefault();
    e.stopPropagation();
  }
}

const { contactForm } = document.forms;
contactForm.addEventListener('submit', validateForm);

//Local Storage
const userName = document.querySelector('#name');
const message = document.querySelector('#message');

const savedUser = {};

const save = () => {
  savedUser.name = userName.value;
  savedUser.email = email.value;

  localStorage.setItem('savedUser', JSON.stringify(savedUser));
};

const retrive = () => {
  const retrivedUser = JSON.parse(localStorage.getItem('savedUser'));

  userName.value = retrivedUser.name;
  email.value = retrivedUser.email;
};

contactForm.addEventListener('submit', function () {
  save();
});

window.addEventListener('load', function () {
  retrive();
});
