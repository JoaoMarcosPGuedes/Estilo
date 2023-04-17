// seleciona os elementos HTML do carrossel
const carousel = document.querySelector(".carousel");
const carouselItems = carousel.querySelectorAll(".carousel-item");
const dotsContainer = carousel.querySelector(".carousel-dots");

// define algumas variáveis para controlar o estado do carrossel
let currentSlide = 0;
let intervalId = null;

// adiciona as bolinhas ao carrossel
for (let i = 0; i < carouselItems.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("carousel-dot");
  if (i === currentSlide) {
    dot.classList.add("active");
  }
  dot.addEventListener("click", () => {
    goToSlide(i);
  });
  dotsContainer.appendChild(dot);
}

// define a função para mudar para um slide específico
function goToSlide(slideIndex) {
  if (slideIndex < 0 || slideIndex >= carouselItems.length) {
    return;
  }
  carouselItems[currentSlide].classList.remove("active");
  carouselItems[slideIndex].classList.add("active");
  dotsContainer.querySelector(".active").classList.remove("active");
  dotsContainer.querySelectorAll(".carousel-dot")[slideIndex].classList.add("active");
  currentSlide = slideIndex;
}

// define a função para mudar para o próximo slide automaticamente
function nextSlide() {
  const nextSlideIndex = (currentSlide + 1) % carouselItems.length;
  goToSlide(nextSlideIndex);
}

// define a função para iniciar a transição automática entre slides
function startInterval() {
  if (!intervalId) {
    intervalId = setInterval(nextSlide, 5000);
  }
}

// define a função para parar a transição automática entre slides
function stopInterval() {
  clearInterval(intervalId);
  intervalId = null;
}

// adiciona eventos de mouse ao carrossel
carousel.addEventListener("mouseenter", stopInterval);
carousel.addEventListener("mouseleave", startInterval);

// inicia a transição automática entre slides
startInterval();
