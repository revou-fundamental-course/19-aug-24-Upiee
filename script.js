let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//  FORM DATA
function displayData() {
  // Mengambil nilai input dari form
  var name = document.getElementById('name').value;
  var dob = document.getElementById('dob').value;
  var gender = document.getElementById('gender').value;
  var message = document.getElementById('message').value;

  // Menampilkan data yang diinputkan di samping form
  document.getElementById('resultName').textContent = "Nama: " + name;
  document.getElementById('resultDob').textContent = "Tanggal Lahir: " + dob;
  document.getElementById('resultGender').textContent = "Jenis Kelamin: " + gender;
  document.getElementById('resultMessage').textContent = "Pesan: " + message;
}
