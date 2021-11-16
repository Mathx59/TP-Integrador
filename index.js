// desactiva loader spinner
const carga = document.getElementById("carga");

window.addEventListener("load", function () {
    carga.style.display = "none";
    
});





$(document).ready(function() {
    $('a[href*=\\#]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top - 80
        }, 500);
    });
});

//menu hamburguesa
const links = document.querySelectorAll(".menuLinks li a");
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.menuLinks');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});

links.forEach((Element) => {
    Element.addEventListener("click", () => {
        enlaces.classList.toggle('activado')
    });
});




// Efecto carrousel de cards
$(function () {
    $('.center').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3900,
        dots: false,
        centerModel: true,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});