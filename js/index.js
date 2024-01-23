document.addEventListener('DOMContentLoaded', () => {
    // VÁRIAVEIS 
    const header = document.querySelector('#header');
    const nav_ancor = document.querySelectorAll('.nav_ancor');

    //EVENT
    window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 914){
            header.classList.remove('transparent_header');
            header.classList.add('header');
        }else{
            header.classList.add('transparent_header');
            header.classList.remove('header');
        }
    })
    window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 860){
            for (let i = 0; i < nav_ancor.length; i++) {
                nav_ancor[i].classList.remove('nav_ancor');
                nav_ancor[i].classList.add('nav_ancor_white');
            }
        }else{
            for (let i = 0; i < nav_ancor.length; i++) {
                nav_ancor[i].classList.remove('nav_ancor_white');
                nav_ancor[i].classList.add('nav_ancor');
            }
        }
    })

    nav_ancor.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                var offset = 0; // Não leva em consideração a altura do cabeçalho
    
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});