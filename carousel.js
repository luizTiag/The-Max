let slideIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const indicators = document.querySelectorAll('.indicator');
const caption = document.getElementById('caption');

function showSlides(n) {
    slideIndex = (n + images.length) % images.length;
    images.forEach((img, idx) => {
        let translation = `translateX(${100 * (idx - slideIndex)}%)`;
        img.style.transform = translation;
    });

    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[slideIndex].classList.add('active');
    
    // Captions
    const captions = [
        "Explorando uma visão do universo...",
        "Uma jornada através das estrelas",
        "Cada imagem, um mundo novo",
        "Vista de lugares além da imaginação",
        "O cosmos em um clique"
    ];
    caption.textContent = captions[slideIndex];
}

function prevImage() {
    showSlides(slideIndex - 1);
}

function nextImage() {
    showSlides(slideIndex + 1);
}

function goToImage(n) {
    showSlides(n);
}

// Auto slide
setInterval(nextImage, 5000); // Muda a imagem a cada 5 segundos

// Inicia com a primeira imagem
showSlides(slideIndex);



