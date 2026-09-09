const sidebar = document.querySelector(".project-navigation");
const toggleButton = document.querySelector(".sidebar-toggle");

const projectButtons = document.querySelectorAll(".project-button");

const projectTitle = document.querySelector("#project-title");
const projectDescription = document.querySelector("#project-description");


const projects = {

    homelab: {
        title: "Enterprise Infrastructure Homelab",
        description: "A virtualized infrastructure environment used to practice Linux, networking, Docker, and system administration."
    },

    docker: {
        title: "Docker Labs",
        description: "A collection of hands-on Docker exercises covering images, containers, networking, volumes, Dockerfiles, and Docker Compose."
    },

    kubernetes: {
        title: "Kubernetes Project",
        description: "A hands-on Kubernetes project focused on deploying and managing a containerized application."
    }
};


projectButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const projectName = button.dataset.project;
        const project = projects[projectName];

        projectTitle.textContent = project.title;
        projectDescription.textContent = project.description;


        projectButtons.forEach(function(button) {
            button.classList.remove("active");
        });

        button.classList.add("active");

    });

});

toggleButton.addEventListener("click", function() {
    sidebar.parentElement.classList.toggle("collapsed");
});