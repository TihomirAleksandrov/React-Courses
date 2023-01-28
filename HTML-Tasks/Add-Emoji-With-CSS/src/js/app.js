import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  var elements = document.querySelectorAll('.price');
  elements.forEach(function(e) {
    if (e.classList.contains('hot')) {
      e.innerHTML += '&#128293';
    }
  })
});
