var images = ["url(fone.jpg)", "url(boom.jpg)"]; // список путей к фоновым картинкам
var currentIndex = 0;

function changeBackgroundImage() {
    document.body.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // переход к следующей картинке
}