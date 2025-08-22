// TOGGLE MENU COM ANIMAÇÃO
const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  toggleButton.classList.toggle('open'); // anima o botão

  if (!navMenu.classList.contains('show')) {
    document.querySelectorAll('nav a').forEach(link => {
      link.style.opacity = '0';
      link.style.transform = 'translateY(-10px)';
    });
  }
});


// CARROSSEL DE SLIDES
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Auto slide
let autoSlide = setInterval(nextSlide, 5000);

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetTimer();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetTimer();
});

function resetTimer() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 5000);
}

// Inicia com o primeiro slide
showSlide(currentSlide);


// FRASES ROTATIVAS COM DESTAQUE NA VARIÁVEL {{banco}}
const nomeDoBanco = "POLI RUGBY";
const loginFrases = [
  "Força e tradição com <span style='color:#ffcc05;'>Poli Rugby</span>!",
  "Engenharia também é <span style='color:#ffcc05;'>raça</span>!",
  "Desde 1989, formando <span style='color:#ffcc05;'>campeões</span>.",
  "A <span style='color:#ffcc05;'>Poli Rugby</span> transforma!"
];

let indexFrase = 0;
const quoteElement = document.getElementById("quote");

function mostrarProximaFrase() {
  quoteElement.style.transform = "translateY(-100%)";
  quoteElement.style.opacity = 0;

  setTimeout(() => {
    const frase = loginFrases[indexFrase].replace(
      "{{banco}}",
      `<span style="color: #ffcc05;">${nomeDoBanco}</span>`
    );

    quoteElement.innerHTML = frase;
    quoteElement.style.transform = "translateY(100%)";
    quoteElement.style.opacity = 0;

    setTimeout(() => {
      quoteElement.style.transform = "translateY(0)";
      quoteElement.style.opacity = 1;
    }, 50);

    indexFrase = (indexFrase + 1) % loginFrases.length;
  }, 600);
}

// Mostra a primeira frase imediatamente
const primeiraFrase = loginFrases[indexFrase].replace(
  "{{banco}}",
  `<span style="color: #ffcc05;">${nomeDoBanco}</span>`
);
quoteElement.innerHTML = primeiraFrase;
indexFrase++;

// Rotaciona as frases a cada 4 segundos
setInterval(mostrarProximaFrase, 4000);
