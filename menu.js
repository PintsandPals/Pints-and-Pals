function toggleMenu(){
  const menu = document.getElementById("nav-links");
  menu.classList.toggle("active");
}

// Expandable Image Functions
function expandImage(img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}