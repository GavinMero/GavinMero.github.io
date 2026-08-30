const sidebar = document.querySelector(".sidebar");
const toggleButton = document.querySelector(".sidebar-toggle");

toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");
});