searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}

let loginform = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginform.classList.remove('active');
}

let registerForm = document.querySelector('.login-form-container');

document.querySelector('#logina-btn').onclick = () =>{
    window.location.href = "Untitled-1.html";
}

let otpform = document.querySelector('.login-form-container');

document.querySelector('#otp-btn').onclick = () =>{
    window.location.href = "otp.html";
}

otpform = document.querySelector('.back-to-login');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}



document.getElementById("logina-btn").addEventListener("click", function () {
    window.location.href = "Untitled-1.html";
  });

window.onscroll = () =>{
    searchform.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

var swiper = new Swiper(".books-slider", {
  loop:true,  
  centeredSlide: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
     slidesPerView: 1,
    },
    768: {
     slidesPerView: 2,
    },
    1024: {
     slidesPerView: 3, 
    },
},
});

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,  
    centeredSlide: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextE1: ".swiper-Button-nezt",
      prevE1: ".swiper-Button-prev",
    },
    breakpoints: {
      0: {
       slidesPerView: 1,
      },
      450: {
       slidesPerView: 2,
      },
      768: {
       slidesPerView: 3, 
      },
      1024: {
       slidesPerView: 4, 
      },
  },
  });