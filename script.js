const button = document.getElementById('open-button');
const curtain = document.getElementById('curtain');
const mainContent = document.getElementById('main-content');
const poemText = document.getElementById('poem-text');
const music = document.getElementById('background-music');

const poem = `Madre querida, tu amor es mi guía,
Eres mi fuerza, mi alegría.
Tu abrazo siempre me da paz,
Tu sonrisa ilumina mi andar.

Hoy te celebro con emoción,
Gracias, mamá, por tu bendición.
Te amo con todo mi corazón,
¡Feliz cumpleaños, mi inspiración!`;

let images = document.querySelectorAll('.carousel-container img');
let currentIndex = 0;

button.addEventListener('click', () => {
    curtain.style.display = 'none';
    mainContent.style.display = 'block';
    music.play();
    typePoem(poem, 0);
});

function typePoem(text, index) {
    if (index < text.length) {
        poemText.textContent += text[index];
        setTimeout(() => typePoem(text, index + 1), 50);
    }
}

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}
