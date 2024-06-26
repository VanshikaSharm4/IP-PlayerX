
var TicTac = document.getElementById("TicTac");
TicTac.addEventListener("click", function() {
  
    window.open("https://iisshh17.github.io/Tic-Tac-Toe/", "_blank");
});


var FluffyB = document.getElementById("FluffyB");
FluffyB.addEventListener("click", function() {
  
    window.open("https://vanshikasharm4.github.io/FEWD-CA2/", "_blank");
});

var Numeron = document.getElementById("Numeron");
Numeron.addEventListener("click", function() {
  
    window.open("https://vanshikasharm4.github.io/Numeron-Game/" , "_blank");
});

var RPS = document.getElementById("RPS");
RPS.addEventListener("click", function() {
  
    window.open("https://iisshh17.github.io/FEWD-Rock-Paper-Scissors/", "_blank");
});

var snake = document.getElementById("snake");
snake.addEventListener("click", function() {
  
    window.open("https://codewithuday05.github.io/snakegame_project/", "_blank");
});

var zombie = document.getElementById("zombie");
zombie.addEventListener("click", function() {
  
    window.open("https://vanshikasharm4.github.io/Zombie-game/", "_blank");
});

var n2 = document.getElementById("n-2");
n2.addEventListener("click", function() {
  
    window.open("https://iisshh17.github.io/Numeron-2/", "_blank");
});

var rr = document.getElementById("rr");
rr.addEventListener("click", function() {
  
    window.open("https://iisshh17.github.io/Roo-Run-CA-2-/", "_blank");
});

var dr = document.getElementById("dr");
dr.addEventListener("click", function() {
  
    window.open("https://aaditya0207.github.io/QuizDrive-07/", "_blank");
});


$(document).ready(function(){
    // sidebar toggle
    $("#navbar-show-btn").click(() => $('.navbar-collapse').removeClass('translate-x-full'));
    $('#navbar-hide-btn').click(() => $('.navbar-collapse').addClass('translate-x-full'));

    // stop transitin on resize
    let resizeTimer;
    $(window).on('resize', () => {
        $(document.body).addClass('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-animation-stopper');
        }, 400);
    });

    // game slider
    $('.game-slider').slick({
        className: "center",
        arrows: true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false
                }
            }
        ]
    });

    // categorywise filtering
    let buttonGroup = $('.button-group button');
    let categoryItemsList = $('.category-item');
    let initialActiveCategory = $($(buttonGroup)[0]).data('filter');

    const setActiveButton = (categoryName) => {
        jQuery.each(buttonGroup, function(index, buttonItem){
            if($(buttonItem).data('filter') == categoryName){
                $(buttonItem).addClass('active-filter-button');
            } else {
                $(buttonItem).removeClass('active-filter-button');
            }
        })
    }

    const filterItems = (categoryName) => {
        jQuery.each(categoryItemsList, function(index, categoryItem){
            if($(categoryItem).hasClass(categoryName)){
                $(categoryItem).css('display', 'block');
            } else {
                $(categoryItem).css('display', 'none');
            }
        })
    }

    setActiveButton(initialActiveCategory);
    filterItems(initialActiveCategory);

    jQuery.each(buttonGroup, function(index, buttonItem){
        $(buttonItem).click(function(){
            let categoryName = $(buttonItem).data('filter');
            setActiveButton(categoryName);
            filterItems(categoryName);
        });
    })
});


function openFeedback() {
    window.location.href = "mailto:playerx01497651@gmail.com?subject=Website Feedback";
}

document.querySelectorAll('[data-toc-button]').forEach(button => {  
    button.addEventListener('click', () => {
      const section = document.getElementById(button.href)
  
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    });
  })

