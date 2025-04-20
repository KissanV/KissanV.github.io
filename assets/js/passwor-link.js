document.addEventListener("DOMContentLoaded", function () {
    const link = document.getElementById("password-link");
    if (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        alert("kvaratharaja");
      });
    }
  });
  