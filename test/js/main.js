
document.getElementById('burger').addEventListener("touchend", function() {
    document.getElementById('menuNavbar').classList.toggle("active-menu")
    this.classList.toggle("change");

});