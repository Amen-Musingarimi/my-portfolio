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
    portfolioImageDesktop: 'images/desktop-work1.png',
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
  popupWindow.classList.add('overlay');
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
  popupWindow.classList.remove('hide');
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
