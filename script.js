const btnOpenMenu = document.querySelector('.openModal');
const btnCloseMenu = document.querySelector('.closeModal');
const modalMenu = document.querySelector('.menuContainer');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

// Opening mobile menu
const openMenu = function openModal() {
  modalMenu.classList.remove('hidden');
  modalMenu.classList.add('overlay');
  btnCloseMenu.classList.remove('hidden');
  btnOpenMenu.classList.add('hidden');
  body.classList.add('blurry-text');
};

btnOpenMenu.addEventListener('click', openMenu);

// Close menu button
const closeMenuBtn = function closeMenu() {
  modalMenu.classList.add('hidden');
  modalMenu.classList.remove('overlay');
  btnCloseMenu.classList.add('hidden');
  btnOpenMenu.classList.remove('hidden');
  body.classList.remove('blurry-text');
};
btnCloseMenu.addEventListener('click', closeMenuBtn);

// Close menu after clicking menu option
const closeOnClick = function close() {
  modalMenu.classList.add('hidden');
  modalMenu.classList.remove('overlay');
  btnCloseMenu.classList.add('hidden');
  btnOpenMenu.classList.remove('hidden');
  body.classList.remove('blurry-text');
};

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', closeOnClick);
}

//-----------------------------Popup window------------------------------------------------
const descriptionText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
const portfolioArray = [
  ['html', 'Ruby on rails', 'css', 'javascript'],
  {
    projectName: 'Tonic',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    portfolioImageMobile: 'images/work1.png',
    portfolioImageDesktop: 'images/desktop-work1.png',
    description: descriptionText,
    buttons: ['See Live', 'See Source'],
  },

  {
    projectName: 'Multi-Post Stories',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: 2015,
    portfolioImageMobile: 'images/work2.png',
    portfolioImageDesktop: 'images/desktop-work2.png',
    description: descriptionText,
    buttons: ['See Live', 'See Source'],
  },

  {
    projectName: 'Facebook 360',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: 2015,
    portfolioImageMobile: 'images/work3.png',
    portfolioImageDesktop: 'images/desktop-work3.png',
    description: descriptionText,
    buttons: ['See Live', 'See Source'],
  },

  {
    projectName: 'Uber Navigation',
    company: 'Uber',
    role: 'Lead Developer',
    year: 2018,
    portfolioImageMobile: 'images/work4.png',
    portfolioImageDesktop: 'images/desktop-work4.png',
    description: descriptionText,
    buttons: ['See Live', 'See Source'],
  },
];

const popupWindow = document.querySelector('.popupWindow');
const popupContainer = document.createElement('div');
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
  class="workImageMobile"
/>
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
      <button class="seeLive" type="button"></button>
      <button class="seeSource" type="button"></button>
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

const work1ImageMobile = document.querySelector('.workImageMobile');

const workImageDesktop = document.querySelector('.workImageDesktop');

const projectDescription = document.querySelector('.projectDescription');

const htmlBtn = document.querySelector('.htmlBtn');

const cssBtn = document.querySelector('.cssBtn');

const javascriptBtn = document.querySelector('.javascriptBtn');

const seeLive = document.querySelector('.seeLive');

const seeSource = document.querySelector('.seeSource');

const closeBtn = document.querySelector('.closeBtn');

//---------------------------Work 1 ----------------------------------------
const seeWork1Btn = document.querySelector('.seeWork1Btn');
seeWork1Btn.addEventListener('click', () => {
  scrollUp();
  console.log('Work ! button clicked');
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
  work1ImageMobile.setAttribute('src', portfolioArray[1].portfolioImageMobile);
  work1ImageMobile.classList.add('works-image', 'mobile-work-img');
  workImageDesktop.setAttribute('src', portfolioArray[1].portfolioImageDesktop);
  workImageDesktop.classList.add('works-image', 'desktop-work-img');
  projectDescription.innerHTML = portfolioArray[1].description;
  projectDescription.classList.add('work-description');
  htmlBtn.innerHTML = portfolioArray[0][0];
  htmlBtn.classList.add('works-btn');
  cssBtn.innerHTML = portfolioArray[0][2];
  cssBtn.classList.add('works-btn');
  javascriptBtn.innerHTML = portfolioArray[0][3];
  javascriptBtn.classList.add('works-btn');
  seeLive.innerHTML = portfolioArray[1].buttons[0];
  seeLive.classList.add('see-project-btn');
  seeSource.innerHTML = portfolioArray[1].buttons[1];
  seeSource.classList.add('see-project-btn');
});

//---------------------------Work 2 ----------------------------------------
const seeWork2Btn = document.querySelector('.seeWork2Btn');
seeWork2Btn.addEventListener('click', () => {
  scrollUp();
  console.log('Work 2 button clicked');
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
  work1ImageMobile.setAttribute('src', portfolioArray[2].portfolioImageMobile);
  work1ImageMobile.classList.add('works-image', 'mobile-work-img');
  workImageDesktop.setAttribute('src', portfolioArray[2].portfolioImageDesktop);
  workImageDesktop.classList.add('works-image', 'desktop-work-img');
  projectDescription.innerHTML = portfolioArray[2].description;
  projectDescription.classList.add('work-description');
  htmlBtn.innerHTML = portfolioArray[0][0];
  htmlBtn.classList.add('works-btn');
  cssBtn.innerHTML = portfolioArray[0][2];
  cssBtn.classList.add('works-btn');
  javascriptBtn.innerHTML = portfolioArray[0][3];
  javascriptBtn.classList.add('works-btn');
  seeLive.innerHTML = portfolioArray[1].buttons[0];
  seeLive.classList.add('see-project-btn');
  seeSource.innerHTML = portfolioArray[1].buttons[1];
  seeSource.classList.add('see-project-btn');
});

//---------------------------Work 2 ----------------------------------------
const seeWork3Btn = document.querySelector('.seeWork3Btn');
seeWork3Btn.addEventListener('click', () => {
  scrollUp();
  console.log('Work 3 button clicked');
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
  work1ImageMobile.setAttribute('src', portfolioArray[3].portfolioImageMobile);
  work1ImageMobile.classList.add('works-image', 'mobile-work-img');
  workImageDesktop.setAttribute('src', portfolioArray[3].portfolioImageDesktop);
  workImageDesktop.classList.add('works-image', 'desktop-work-img');
  projectDescription.innerHTML = portfolioArray[3].description;
  projectDescription.classList.add('work-description');
  htmlBtn.innerHTML = portfolioArray[0][0];
  htmlBtn.classList.add('works-btn');
  cssBtn.innerHTML = portfolioArray[0][2];
  cssBtn.classList.add('works-btn');
  javascriptBtn.innerHTML = portfolioArray[0][3];
  javascriptBtn.classList.add('works-btn');
  seeLive.innerHTML = portfolioArray[1].buttons[0];
  seeLive.classList.add('see-project-btn');
  seeSource.innerHTML = portfolioArray[1].buttons[1];
  seeSource.classList.add('see-project-btn');
});

//---------------------------Work 2 ----------------------------------------
const seeWork4Btn = document.querySelector('.seeWork4Btn');
seeWork4Btn.addEventListener('click', () => {
  scrollUp();
  console.log('Work 2 button clicked');
  popupWindow.classList.remove('hide');
  popupWindow.classList.add('overlay');
  workTitle.innerHTML = portfolioArray[4].projectName;
  workTitle.classList.add('work-title');
  clientName.innerHTML = portfolioArray[4].company;
  clientName.classList.add('work-client', 'h3-common-styles');
  roleOccupied.innerHTML = portfolioArray[4].role;
  roleOccupied.classList.add('work-role', 'h3-common-styles');
  projectYear.innerHTML = portfolioArray[4].year;
  projectYear.classList.add('work-year', 'h3-common-styles');
  work1ImageMobile.setAttribute('src', portfolioArray[4].portfolioImageMobile);
  work1ImageMobile.classList.add('works-image', 'mobile-work-img');
  workImageDesktop.setAttribute('src', portfolioArray[4].portfolioImageDesktop);
  workImageDesktop.classList.add('works-image', 'desktop-work-img');
  projectDescription.innerHTML = portfolioArray[4].description;
  projectDescription.classList.add('work-description');
  htmlBtn.innerHTML = portfolioArray[0][0];
  htmlBtn.classList.add('works-btn');
  cssBtn.innerHTML = portfolioArray[0][2];
  cssBtn.classList.add('works-btn');
  javascriptBtn.innerHTML = portfolioArray[0][3];
  javascriptBtn.classList.add('works-btn');
  seeLive.innerHTML = portfolioArray[1].buttons[0];
  seeLive.classList.add('see-project-btn');
  seeSource.innerHTML = portfolioArray[1].buttons[1];
  seeSource.classList.add('see-project-btn');
});

//-----------------------------------------close popup--------------------
closeBtn.addEventListener('click', function () {
  popupWindow.classList.add('hide');
  popupWindow.classList.remove('overlay');
});
