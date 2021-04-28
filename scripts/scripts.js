let homeBtn = document.querySelector('.home');
let homeCtn = document.querySelector('header');
let projectBtn = document.querySelector('.projects');
let projectCtn = document.querySelector('.project-ctn');
let aboutBtn = document.querySelector('.about');
let aboutCtn = document.querySelector('.about-ctn');
let contactBtn = document.querySelector('.contact');
let contactCtn = document.querySelector('.contact-ctn');

homeBtn.addEventListener('click', function () {
    homeCtn.scrollIntoView(true);
});

projectBtn.addEventListener('click', function () {
    projectCtn.scrollIntoView(true);
});

aboutBtn.addEventListener('click', function () {
    aboutCtn.scrollIntoView(true);
});

contactBtn.addEventListener('click', function () {
    contactCtn.scrollIntoView(true);
});
