document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("contactModal");
    var btn = document.getElementById("contactBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var links = document.querySelectorAll("nav ul li a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});