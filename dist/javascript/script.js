// calls the toggle button for additional navigation
const toggleBtn = document.querySelector('.toggle__button');
const dropdown = document.querySelector('.dropdown');

// calls the three verticle dots
const contactInfo = document.querySelector('.contact__info');
const dropdownInfo = document.querySelector('.dropdownInfo');

// calls the mini navigation bars for additional navigationconst menuItems = document.querySelectorAll("#menu li");
const menuItems = document.querySelectorAll("#menu li");
const contentContainers = document.querySelectorAll('[class^="nav-menu"]');

// calls the three verticle dots
const nav__selector = document.querySelector('.navDropdown__ultra');
const thewhatnow = document.querySelector('#pageSelector');

// for toggle nav pages
thewhatnow.addEventListener('click', () => {
  nav__selector.classList.toggle('active');
});

const dropdownItems = document.querySelectorAll(".dropdownItem");
dropdownItems.forEach((dropdownsItems) => {
  dropdownsItems.addEventListener("click", () => {
    dropdownsItems.classList.toggle("active");
    
  });
});
// full vendor code:
const starNavDiscover = document.querySelectorAll(".nav__link");
const starContentDiscover = document.querySelectorAll(".discover__tabpane");
starNavDiscover.forEach((starD) => {
starD.addEventListener("click", () => {
    removeActiveStar();
    starD.classList.add("active");
    const activeContent = document.querySelector(`#${starD.id}-content`); 
    removeActiveContent();
    activeContent.classList.add("active");
});
});

function removeActiveStar() {
starNavDiscover.forEach((star) => {
    star.classList.remove("active");
});
}

function removeActiveContent() {
    starContentDiscover.forEach((content) => {
    content.classList.remove("active");
    });
}

// vendore code for discover nav:
// const starNavDiscoverre = document.querySelectorAll(".nav__link__dis");
//     const starContentDiscoverre = document.querySelectorAll(".chooseUs__tabpane");
//     starNav.forEach((star) => {
//     star.addEventListener("click", () => {
//         removeActiveStar();
//         star.classList.add("active");
//         const activeContent = document.querySelector(`#${star.id}-content`); 
//         removeActiveContent();
//         activeContent.classList.add("active");
//     });
//     });





toggleBtn.addEventListener('click', () => {
  dropdown.classList.toggle('show');
  toggleBtn.classList.toggle('cross');
  if(dropdownInfo.classList.contains('show')){
    dropdownInfo.classList.remove('show');

  }
});


// for toggle button of info card
contactInfo.addEventListener('click', () => {
  dropdownInfo.classList.toggle('show');
  dropdown.classList.remove('show');
       toggleBtn.classList.remove('cross');
});



