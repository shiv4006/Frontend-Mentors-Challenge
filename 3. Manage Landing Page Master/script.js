function navigationForSmallScreen() {
    let hamburger = document.querySelector(".hamburger");
    let close = document.querySelector(".close");
    let overlay = document.querySelector(".overlay");
    
    hamburger.addEventListener('click', (e) => {
        hamburger.classList.toggle("be-active");
        close.classList.toggle("be-active");
        overlay.style.display = "block";
    });
    
    close.addEventListener('click', (e) => {
        hamburger.classList.toggle("be-active");
        close.classList.toggle("be-active");
        overlay.style.display = "none";
    });
}
navigationForSmallScreen();


function sliderImplementation() {
    const slides = document.querySelector(".slides");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    
    let currentIndex = 0;
    
    function showSlide(index) {
      const slideWidth = slides.querySelector(".slide").clientWidth;
      slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }
    
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
      showSlide(currentIndex);
    });
    
    nextButton.addEventListener("click", () => {
      const totalSlides = slides.querySelectorAll(".slide").length;
      currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : currentIndex;
      showSlide(currentIndex);
    });
}
sliderImplementation();


