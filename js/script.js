const btnMore = document.querySelector('.podcasts__more');
const podcastsCard = document.querySelectorAll('.podcasts__card');

btnMore.addEventListener('click', () => {
    podcastsCard.forEach(el => {el.classList.add('podcasts__card--visible') });
    btnMore.closest('.podcasts__center').classList.add('podcasts__center--hidden');
});

const element = document.querySelector('.broadcasts__sel');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
});


new Accordion('.accordion-container', {
    openOnInit: [0],
});

document.querySelectorAll('.tabs-btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-btn').forEach(function(btn){
    btn.classList.remove('tabs-btn--active')});
    e.currentTarget.classList.add('tabs-btn--active');
    document.querySelectorAll('.guests__card').forEach(function(tabsBtn){
    tabsBtn.classList.remove('guests__card--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__card--active');
    });
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
  
    breakpoints: {

        320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },

        1110: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
        },

        1270: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
        },

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10,
            errorMessage: 'Email is required'
        },
        
        mail: {
            required: true,
            email: true
        },

        msg: {
            required: true,
            minLength: 1,
        },
    },
 
    messages: {
        name: {
            required: 'Вы не ввели имя',
            minLength: 'Имя должно содержать не менее 2 символов',
            maxLength: 'Имя должно содержать не более 10 символов'
        },
 
        mail: {
            required: 'Вы не ввели e-mail',
            email: 'Введите корректный e-mail'
        },

        msg: {
            required: 'Вы не ввели сообщение'
        },
 
        
    },
});

window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.header__burger').addEventListener('click', function(){
        document.querySelector('.burger').classList.toggle('is-active')
    })
})
window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.burger__close').addEventListener('click', function(){
        document.querySelector('.burger').classList.toggle('is-active')
    })
})

window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.header__mobile-top').addEventListener('click', function(){
        document.querySelector('.header__mobile-bottom').classList.toggle('header__is-active')
    })
})
window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.header__mobile-btn').addEventListener('click', function(){
        document.querySelector('.header__mobile-bottom').classList.toggle('header__is-active')
    })
})