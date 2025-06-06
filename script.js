const button = document.getElementById('open-button');
const curtain = document.getElementById('curtain');
const mainContent = document.getElementById('main-content');
const poemText = document.getElementById('poem-text');
const music = document.getElementById('background-music');
const heartsContainer = document.getElementById('hearts-container');

const poem = `¡Feliz cumpleaños, mi inspiración!
Gracias por ser como eres y por
nunca dejarme solo, eres simplemente 
maravillosa, no olvides nunca que 
TE AMO DEMASIADO MAMITA PRECIOSA,
tampoco olvides lo valiosa que eres para mí,
y lo importante que eres en mi vida.`;

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
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);


// Abrir telón al presionar el botón
document.getElementById('open-button').addEventListener('click', function() {
    document.getElementById('curtain').classList.add('open');
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('background-music').play();
});

// Mostrar mensaje oculto después de 10 segundos
setTimeout(() => {
    document.getElementById('hidden-message').style.display = 'block';
     // Lanzar varios fuegos artificiales
    var duration = 3 * 1000; // 3 segundos
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}, 17000); // 10000 milisegundos = 10 segundos