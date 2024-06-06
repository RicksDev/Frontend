let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slides .slide');
    const radios = document.querySelectorAll('.navigation input[type="radio"]');
    
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
            if (radios[i]) {
                radios[i].checked = true;
            }
        } else {
            slide.style.display = 'none';
        }
    });
}


function nextSlide() {
    slideIndex++;
    if (slideIndex >= 3) {
        slideIndex = 0; // Reinicia o índice quando chegar ao último slide
    }
    showSlide(slideIndex);
}

// Avança o slide a cada 5 segundos
setInterval(nextSlide, 5000); // 5000 milissegundos = 5 segundos

// Exibir o primeiro slide inicialmente
showSlide(slideIndex);
