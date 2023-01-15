$(document).ready(function(){
    
 //==== ACCORDION COMPONENT
  $( "#accordion" ).accordion();
    
  //==== SWIPER SLIDER  
  const swiper = new Swiper('.swiper', {
  grabCursor: true,
  effect: 'cards',
    
  autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    speed:500,
      
 //==== And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
      
  //==== Navigation arrows
  navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
});
    
//===== Counter Up
$('.counter').counterUp({
    delay: 10,
    time: 1500
});

//===== Progress Bar
if($('.progress-line').length) {
    $('.progress-line').appear(function(){
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent+'%');
    }, {accY: 0});
   }
    
//===MIXIT UP
var mixer = mixitup('.grid-portfolio-container');

//===== Scollify
  $(function() {
      $.scrollify({
        section : ".scrollify",
        updateHash: false,
        setHeights: false,
        scrollSpeed: 500,
        
      });
 });
    
});

//===HAMBARGAR
    function openMenu() {
        document.getElementById('navbar').style.height = "100%";
    }
    function closeMenu() {
        document.getElementById('navbar').style.height = "0%";
    }

//====SMOOTH SCROLLY
 
$(function(){
    $('.menu-item a, .menu-item2 a, .scroll-down a').on('click', function(){
        $('html,body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});


