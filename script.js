const edustats = document.querySelector('#edu');
const expstats = document.querySelector('#exp');
//education and experience icons
const icon_edu = document.querySelector('.edu-icon');
const icon_exp = document.querySelector('.exp-icon');
const dark_icons = [icon_edu.src , icon_exp.src];
//content toggle
const educontent = document.querySelector('#edu-content');
const expcontent = document.querySelector('#work-content');
document.addEventListener('DOMContentLoaded', () => {
  // Your JavaScript code here

edustats.addEventListener('click', ()=>{
    expstats.classList.remove('clicked');
    icon_exp.setAttribute('src',dark_icons[1]);
    expcontent.classList.add('d-none');
    educontent.classList.remove('d-none');
    
    icon_edu.setAttribute('src',dark_icons[0]);
    edustats.classList.add('clicked');
});

expstats.addEventListener('click', ()=>{
    edustats.classList.remove('clicked');
    icon_edu.setAttribute('src','./images/experience section/icons8-education-48.png');
    expcontent.classList.remove('d-none');
    educontent.classList.add('d-none');
    
    icon_exp.setAttribute('src','./images/experience section/icons8-internship-64.png');
    expstats.classList.add('clicked');
    
});

 

//swiper

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  //text autoplay in the name animation
  const typed = new Typed('.autoplay-text', {
    strings:["Web Developer","Freelancer","Programmer"],
    typeSpeed: 100,
    backSpeed:100,
    loop:true,
  });

const navbar = document.querySelector('.navbar');
const hamberger_menu = document.querySelector('.hamberger-menu');
const exit = document.querySelector('.exit');


hamberger_menu.addEventListener('click',()=>{
   navbar.classList.add('navbar-active');
    exit.style.display = "block";
    hamberger_menu.style.display = "none";
});

exit.addEventListener('click',()=>{
  navbar.classList.remove('navbar-active');
   exit.style.display = "none";
   hamberger_menu.style.display = "block";
});

//scroll button

const firstpage = document.querySelector('.home');
const scrollbtn = document.querySelector('.slide-up');


const handleScroll = ()=>{
  const scrolly = window.scrollY;
  const landing_page_height = firstpage.offsetHeight;

  if(scrolly >landing_page_height/2.3){
    scrollbtn.style.display = 'block';
  }
  else{
    scrollbtn.style.display = 'none';
  }
}
window.addEventListener('scroll',handleScroll);




//scrollup

scrollbtn.addEventListener('click',()=>{

  const scrollDuration = 1000;
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

});