AOS.init({
    duration: 1000,
});

$(function() {
    $('.autoplay').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        speed:  2500,
        infinite: true,
        autoplay: true,
        cssEase: 'linear',
        nextArrow: ``,
        prevArrow: ``,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});

function openNav(status) {
    const iconeMenu = document.getElementById('nav-icon');
    const body = document.getElementsByTagName('body')[0];
    const links = document.getElementsByClassName('links-hidden')[0];

    if (status === 'false') {
        iconeMenu.src = './assets/icons/i-nav-close.svg';
        links.style.display = 'none';
        body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.body.scroll = "yes";
    } else {
        this.nav = !this.nav;
        if (this.nav) {
            iconeMenu.src = './assets/icons/i-nav-close.svg';
            
            iconeMenu.style.marginRight = '-7%';
            links.style.display = 'block';
            // document.documentElement.style.overflow = 'hidden';
            document.body.scroll = "no";
        }
        else {
            iconeMenu.src = './assets/icons/i-nav-open.svg';
            iconeMenu.style.marginLeft = '0';
            
            iconeMenu.style.marginRight = '0';
            links.style.display = 'none';
            body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
            document.body.scroll = "yes";
        }
    }
}


// Seleciona todos os elementos <a> dentro de "links-mobile"
var links = document.querySelectorAll(".links-mobile a");
const iconeMenu2 = document.getElementById('nav-icon');
// Para cada link...
for (var i = 0; i < links.length; i++) {
    // Adiciona um ouvinte de evento de clique
    links[i].addEventListener('click', function() {
        // Adiciona um pequeno atraso para permitir que a página se mova para o local do hash
        setTimeout(function() {
            // Depois de um pequeno atraso, fecha o menu de navegação
            openNav('false');
            iconeMenu2.src = './assets/icons/i-nav-open.svg';
        }, 100); // 500 milissegundos = 0.5 segundos
    });
}


//video
document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById('videoModal');
    var imgPlaceholder = document.getElementById('playVideo');
    var videoPlayer = document.getElementById('videoPlayer');
    var span = document.getElementsByClassName('close')[0];

    console.log(imgPlaceholder);  // Adicione esta linha

    imgPlaceholder.onclick = function () {
        modal.style.display = "block";
        videoPlayer.play();
    }

    span.onclick = function () {
        modal.style.display = "none";
        videoPlayer.pause();
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            videoPlayer.pause();
        }
    }
});


// const li = document.querySelectorAll(".linksMobile");
// const liDesktop = document.querySelectorAll(".linksDesktop");
// const sec = document.querySelectorAll("section");

// function activeMenu() {
//     let len = sec.length;
//     while (--len && window.scrollY + 97 < sec[len].offsetTop) { }
//     li.forEach(ltx => ltx.classList.remove("active"));
//     li[len].classList.add("active");

//     liDesktop.forEach(ltx => ltx.classList.remove("active"));
//     liDesktop[len].classList.add("active");
// }
// activeMenu();
// window.addEventListener("scroll", activeMenu);