document.addEventListener("DOMContentLoaded", () => {
  const sound = document.getElementById("click-sound");
  sound.volume = 1;

  // Pilih semua elemen yang bisa diklik: button, a, atau role="button"
  const elements = document.querySelectorAll("button, a, [role='button']");

  elements.forEach(el => {
    el.addEventListener("click", function (e) {
      const url = el.getAttribute("href") || el.getAttribute("data-link");

      // Jika tombol mengarah ke halaman/file, cegah dulu agar bisa mainkan suara
      if (url) {
        e.preventDefault();

        sound.currentTime = 0;
        sound.play();

        setTimeout(() => {
          window.location.href = url;
        }, 800); // ubah sesuai durasi sound
      } else {
        // Jika tidak ada URL, cukup mainkan suara saja
        sound.currentTime = 0;
        sound.play();
      }
    });
  });
});
