let currentIndex = 0;
const slider = document.getElementById("slider");
const wrapper = document.getElementById("slideWrapper");
const slides = wrapper.querySelectorAll(".slide");
const images = wrapper.querySelectorAll("img");

window.addEventListener("load", () => {
  // Atur lebar masing-masing .slide sesuai gambar aslinya
  slides.forEach((slide, i) => {
    slide.style.width = images[i].naturalWidth + "px";
    slide.style.height = images[i].naturalHeight + "px";
  });

  showSlide(currentIndex);
});

let totalWidth = 0;
slides.forEach((slide, i) => {
  totalWidth += images[i].naturalWidth;
});
wrapper.style.width = totalWidth + "px";

function showSlide(index) {
  // Geser slide wrapper ke posisi gambar ke-index
  const offset = slides[index].offsetLeft;
  wrapper.style.transform = `translateX(-${offset}px)`;

  // Ubah ukuran slider sesuai gambar aktif
  slider.style.width = images[index].naturalWidth + "px";
  slider.style.height = images[index].naturalHeight + "px";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);
