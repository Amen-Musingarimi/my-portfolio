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

// ------------------------------------------Work------------------------------------------------
const portfolioArray = [
  {
    projectName: 'Leaderboard',
    company: 'Microverse',
    role: 'Full Stack Dev',
    year: 2023,
    workImage: 'images/leaderboard.png',
    description:
      'The leaderboard website displays scores submitted by different players. It also allows the user to submit his/her score. All data is preserved thanks to the external Leaderboard API service.',
    htmlSkill: 'html',
    cssSkill: 'css',
    javascriptSkill: 'javascript',
    webpackSlill: 'webpack',
    gitHubLink: 'https://github.com/Amen-Musingarimi/leaderboard',
    liveDemoLink: 'https://amen-musingarimi.github.io/leaderboard/dist/',
  },

  {
    projectName: 'To-Do App',
    company: 'Microverse',
    role: 'Full Stack Dev',
    year: 2023,
    workImage: 'images/todo.png',
    description:
      'This is a to-do application that allows users to set their goals and mark or delete them when they completed the goal. Built with Html, CSS, and Vanilla JavaScript.',
    htmlSkill: 'html',
    cssSkill: 'css',
    javascriptSkill: 'javascript',
    webpackSlill: 'webpack',
    gitHubLink: 'https://github.com/Amen-Musingarimi/todo-app',
    liveDemoLink: 'https://amen-musingarimi.github.io/todo-app/dist/',
  },

  {
    projectName: 'Music Concert',
    company: 'Microverse',
    role: 'Front End Dev',
    year: 2023,
    workImage: 'images/desktop-work1.png',
    description:
      'Musical Concert is a website where users can see details about a popular music concert hosted in Victoria Falls, Zimbabwe. This was built with Html, CSS and JavaSript',
    htmlSkill: 'html',
    cssSkill: 'css',
    javascriptSkill: 'javascript',
    gitHubLink: 'https://github.com/Amen-Musingarimi/musical-concert-capstone',
    liveDemoLink:
      'https://amen-musingarimi.github.io/musical-concert-capstone/',
  },

  {
    projectName: 'LetsCook',
    company: 'Microverse',
    role: 'Front End Dev',
    year: 2023,
    workImage: 'images/foodApp.png',
    description:
      'The LetsCook website displays meals that are called from an API. It also allows the user to like the menu that he/she likes and also comment on it. All data is preserved thanks to the external Meals DB and the Involvement API services.',
    htmlSkill: 'html',
    cssSkill: 'css',
    javascriptSkill: 'javascript',
    gitHubLink: 'https://github.com/Amen-Musingarimi/JavascriptCapstone',
    liveDemoLink: 'https://amen-musingarimi.github.io/JavascriptCapstone/dist/',
  },
];

// ------------------------------Dynamic rendering of works------------------------------
const work = document.querySelector('.work');

for (let i = 0; i < portfolioArray.length; i += 1) {
  const id = i;

  const fetch = document.querySelector('.work').innerHTML;
  work.innerHTML = `
  <div class="grid-item" id=${id}>
  <div class="card-container">
             <img
               src=${portfolioArray[i].workImage}
               alt="My firts portfolio work"
               class="works-image"
             />
             <div class="works-details">
               <h2 class="work-title">${portfolioArray[i].projectName}</h2>
               <ul>
                 <li><h3 class="work-client h3-common-styles">${
                   portfolioArray[i].company
                 }</h3></li>
                 <li><img src="images/dot.png" alt="Canopy icon image" /></li>
                 <li>
                   <h3 class="work-role h3-common-styles">${
                     portfolioArray[i].role
                   }</h3>
                 </li>
                 <li><img src="images/dot.png" alt="Backend icon image" /></li>
                 <li><h3 class="work-year h3-common-styles">${
                   portfolioArray[i].year
                 }</h3></li>
               </ul>
               <p class="work-description">
                 ${portfolioArray[i].description}
               </p>
               <ul class="works-btns">
                 <li><button type="button" class="works-btn">${
                   portfolioArray[i].htmlSkill
                 }</button></li>
                 <li><button type="button" class="works-btn">${
                   portfolioArray[i].cssSkill
                 }</button></li>
                 <li>
                   <button type="button" class="works-btn">${
                     portfolioArray[i].javascriptSkill
                   }</button>
                 </li>
               </ul>
               <button id=${portfolioArray.indexOf(
                 i
               )} class="see-project-btn seeWork1Btn" type="button">
                 See Project
               </button>
             </div>
           </div>
           </div> ${fetch}
  `;
}

const scrollUp = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const seeProjectBtns = document.querySelectorAll('.see-project-btn');
const popupWindow = document.querySelector('.popupWindow');

seeProjectBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    scrollUp();
    popupWindow.classList.remove('hide');
    popupWindow.classList.add('overlay');
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('pop');
    popupWindow.appendChild(popupContainer);

    const index = e.target.parentNode.parentNode.parentNode.getAttribute('id');

    popupContainer.innerHTML = `
      <div class="popupCard">
        <div class="projectHeader">
          <h2 class="work-title">${portfolioArray[index].projectName}</h2>
          <a class="closeBtn" href="#"><i class="fa-solid fa-xmark"></i></a>
        </div>
        <div class="roleDetail marginBottom">
          <h3 class="work-client h3-common-styles">${portfolioArray[index].company}</h3>
          <img src="images/dot.png" alt="Canopy icon image" />
          <h3 class="work-role h3-common-styles">${portfolioArray[index].role}</h3>
          <img src="images/dot.png" alt="Backend icon image" />
          <h3 class="work-year h3-common-styles">${portfolioArray[index].year}</h3>
        </div>
        <img src="${portfolioArray[index].workImage}"
             alt="My firts portfolio work"
             class="workImageDesktop"/>
        <div class="projectDetails details">
          <p class="work-description marginBottom">${portfolioArray[index].description}</p>
          <div projectBtns>
            <div  class="skillsBtns marginBottom paddingBottom">
              <button class="htmlBtn works-btn" type="button">${portfolioArray[index].htmlSkill}</button>
              <button class="cssBtn works-btn" type="button">${portfolioArray[index].cssSkill}</button>
              <button class="javascriptBtn works-btn" type="button">${portfolioArray[index].javascriptSkill}</button>
            </div>
            <div class="buttons previewBtns">
      <a class="see-project-btn dynamicBTns seeLive" href="${portfolioArray[index].liveDemoLink}" target="blank">   See Live
      <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      <a class="see-project-btn dynamicBTns seeSource" href="${portfolioArray[index].gitHubLink}" target="blank"> See Source
      <i class="fa-brands fa-github"></i></a>
    </div>
            `;

    // Add event listener for the close button
    const closeBtn = popupContainer.querySelector('.closeBtn');
    closeBtn.addEventListener('click', () => {
      popupWindow.classList.add('hide');
      popupWindow.classList.remove('overlay');
      popupContainer.remove();
    });

    // add event listener to overlay element to close popup
    const overlay = popupWindow.querySelector('.overlay');
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        popupWindow.classList.add('hide');
        popupWindow.classList.remove('overlay');
        popupContainer.remove();
      }
    });

    // prevent propagation of click event on popupContainer
    popupContainer.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
});

// -----------------------------------------close popup--------------------
const closeBtns = document.querySelectorAll('.closeBtn');

for (let i = 0; i < closeBtns.length; i += 1) {
  closeBtns[i].addEventListener('click', () => {
    popupWindow.classList.remove('overlay');
    popupWindow.classList.add('hide');
    popupWindow.removeChild(popupWindow.firstChild);
  });
}

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

// Local Storage
const userName = document.querySelector('#name');

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

contactForm.addEventListener('submit', () => {
  save();
});

window.addEventListener('load', () => {
  retrive();
});
