  const autoCloseDelay = 18000; // waktu auto-close dalam milidetik (18 detik)

  const detailsElements = document.querySelectorAll("details");

  detailsElements.forEach((targetDetail) => {
    targetDetail.addEventListener("toggle", () => {
      if (targetDetail.open) {
        // Tutup detail lain saat dibuka
        detailsElements.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });

        // Tutup otomatis setelah delay
        setTimeout(() => {
          if (targetDetail.open) {
            targetDetail.removeAttribute("open");
          }
        }, autoCloseDelay);
      }
    });
  });