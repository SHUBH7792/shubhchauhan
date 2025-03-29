function startSlider(category) {
    const images = document.querySelectorAll(`#${category} .image-slider img`);
    let index = 0;

    function showNextImage() {
        images.forEach((img, i) => img.classList.toggle('active', i === index));
        index = (index + 1) % images.length; // Cycle through images
    }

    showNextImage(); // Show the first image immediately
    setInterval(showNextImage, 1000); // Change image every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    startSlider('lamps');
    startSlider('utensils');
});