const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'inactive-left', 'inactive-right');
        if (i < index) {
            slide.classList.add('inactive-left');
        } else if (i > index) {
            slide.classList.add('inactive-right');
        }
    });
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Cambia el slide cada 5 segundos

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});



// // Carrusel index
// const carousel = document.querySelector('.carousel');
// const images = document.querySelectorAll('.carousel-image');
// let currentIndex =0;

// function showImage(index) {
//   images.style.display = 'block';
//   images.forEach(image => {
//     image.style.display = 'none';
//   });
//   images[index].style.display = 'block';
// }

// function nextSlide() {
//   if (currentIndex === images.length - 1) {
//     currentIndex =0;
//   } else {
//     currentIndex++;
//   }
//   showImage(currentIndex);
// }

// setInterval(nextSlide, 3000); // Cambiar de imagen cada 3 segundos

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Cambia la imagen cada 5 segundos
}


